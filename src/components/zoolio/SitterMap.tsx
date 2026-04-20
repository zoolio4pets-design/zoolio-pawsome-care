import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MAPBOX_PUBLIC_TOKEN } from "@/lib/mapbox";
import type { Sitter } from "@/data/sitters";

interface SitterMapProps {
  sitters: Sitter[];
  activeId?: string | null;
  onSelect?: (id: string) => void;
}

export const SitterMap = ({ sitters, activeId, onSelect }: SitterMapProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);

  useEffect(() => {
    if (!MAPBOX_PUBLIC_TOKEN || !containerRef.current || mapRef.current) return;
    mapboxgl.accessToken = MAPBOX_PUBLIC_TOKEN;
    mapRef.current = new mapboxgl.Map({
      container: containerRef.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [24.5, -29],
      zoom: 4.5,
    });
    mapRef.current.addControl(new mapboxgl.NavigationControl({ showCompass: false }), "top-right");
    return () => {
      markersRef.current.forEach((m) => m.remove());
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !sitters.length) return;
    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];

    const bounds = new mapboxgl.LngLatBounds();
    sitters.forEach((s) => {
      const el = document.createElement("button");
      el.className = `rounded-full border-2 border-white shadow-md text-xs font-semibold px-2.5 py-1 transition-transform ${
        activeId === s.id ? "bg-accent text-accent-foreground scale-110" : "bg-primary text-primary-foreground"
      }`;
      el.textContent = `R${s.pricePerNightZar}`;
      el.onclick = () => onSelect?.(s.id);
      const marker = new mapboxgl.Marker(el).setLngLat([s.lng, s.lat]).addTo(map);
      markersRef.current.push(marker);
      bounds.extend([s.lng, s.lat]);
    });
    if (sitters.length > 1) map.fitBounds(bounds, { padding: 60, maxZoom: 11, duration: 600 });
    else map.flyTo({ center: [sitters[0].lng, sitters[0].lat], zoom: 11, duration: 600 });
  }, [sitters, activeId, onSelect]);

  if (!MAPBOX_PUBLIC_TOKEN) {
    return (
      <div className="h-full w-full grid place-items-center bg-secondary/40 border border-dashed border-border rounded-2xl p-8 text-center">
        <div className="max-w-sm">
          <div className="text-sm font-semibold text-foreground">Map preview unavailable</div>
          <p className="mt-2 text-xs text-muted-foreground">
            Add your Mapbox public token in <code className="font-mono">src/lib/mapbox.ts</code> to enable the live map.
            Get a free token at{" "}
            <a href="https://account.mapbox.com/access-tokens/" target="_blank" rel="noreferrer" className="text-primary underline">
              mapbox.com
            </a>.
          </p>
        </div>
      </div>
    );
  }

  return <div ref={containerRef} className="h-full w-full rounded-2xl overflow-hidden" />;
};
