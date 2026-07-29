"use client";
import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ReservationPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedTable, setSelectedTable] = useState("لطفاً از نقشه انتخاب کنید");
  const [timeDisplay, setTimeDisplay] = useState("19:00");
  const [guests, setGuests] = useState("");
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (!containerRef.current) return;

    // Dynamic import for Three.js
    const loadThree = async () => {
      const THREE = await import("three");
      const { OrbitControls } = await import("three/examples/jsm/controls/OrbitControls.js");

      const container = containerRef.current!;
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x121414);

      const camera = new THREE.PerspectiveCamera(
        45,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      );
      camera.position.set(12, 12, 12);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.shadowMap.enabled = true;
      container.appendChild(renderer.domElement);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.maxPolarAngle = Math.PI / 2.1;
      controls.minDistance = 5;
      controls.maxDistance = 25;

      // Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
      scene.add(ambientLight);

      const spotlight = new THREE.PointLight(0xf2ca50, 1.2, 50);
      spotlight.position.set(0, 15, 0);
      spotlight.castShadow = true;
      scene.add(spotlight);

      // Restaurant Floor
      const floorGeo = new THREE.PlaneGeometry(20, 20);
      const floorMat = new THREE.MeshStandardMaterial({
        color: 0x1a1c1c,
        roughness: 0.1,
        metalness: 0.1,
      });
      const floor = new THREE.Mesh(floorGeo, floorMat);
      floor.rotation.x = -Math.PI / 2;
      floor.receiveShadow = true;
      scene.add(floor);

      // Grid
      const grid = new THREE.GridHelper(20, 20, 0x4d4635, 0x1e2020);
      grid.position.y = 0.01;
      scene.add(grid);

      // Tables
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const tables: any[] = [];
      const tableGeometry = new THREE.CylinderGeometry(0.8, 0.8, 0.6, 32);
      const tablePositions = [
        { x: -5, z: -5, id: "A1" },
        { x: 0, z: -5, id: "A2" },
        { x: 5, z: -5, id: "A3" },
        { x: -5, z: 0, id: "B1" },
        { x: 0, z: 0, id: "B2" },
        { x: 5, z: 0, id: "B3" },
        { x: -5, z: 5, id: "C1" },
        { x: 0, z: 5, id: "C2" },
        { x: 5, z: 5, id: "C3" },
      ];

      tablePositions.forEach((pos) => {
        const material = new THREE.MeshStandardMaterial({
          color: 0xf2ca50,
          emissive: 0xf2ca50,
          emissiveIntensity: 0.2,
        });
        const mesh = new THREE.Mesh(tableGeometry, material);
        mesh.position.set(pos.x, 0.3, pos.z);
        mesh.userData = { id: pos.id, available: Math.random() > 0.3 };
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
        tables.push(mesh);
      });

      // Raycaster for clicking
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();

      const onClick = (event: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / container.clientWidth) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / container.clientHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(tables);

        if (intersects.length > 0) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const table = intersects[0].object as any;
          if (table.userData.available) {
            setSelectedTable(`میز ${table.userData.id}`);
            table.scale.set(1.1, 1.1, 1.1);
            setTimeout(() => table.scale.set(1, 1, 1), 200);
          } else {
            alert("این میز در زمان انتخاب شده رزرو می‌باشد.");
          }
        }
      };

      container.addEventListener("click", onClick);

      // Handle Resize
      const onResize = () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      };
      window.addEventListener("resize", onResize);

      function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      }
      animate();

      return () => {
        container.removeEventListener("click", onClick);
        window.removeEventListener("resize", onResize);
        renderer.dispose();
        container.removeChild(renderer.domElement);
      };
    };

    loadThree();
  }, []);

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    const hour = Math.floor(time);
    const min = time % 1 === 0.5 ? "30" : "00";
    setTimeDisplay(`${hour}:${min}`);
  };

  return (
    <div className="bg-background text-on-background selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main className="pt-32 pb-section-gap-desktop max-w-360 mx-auto px-6 md:px-[80px] min-h-screen flex flex-col justify-center relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="flex flex-col lg:flex-row gap-6 items-stretch relative z-10">
          {/* Left Side: 3D Visualization & Time Slider */}
          <div className="lg:w-2/3 flex flex-col gap-6">
            <div className="space-y-4">
              <h1 className="type-display text-primary-fixed-dim">
                انتخاب میز هوشمند
              </h1>
              <p className="text-on-surface-variant type-body-lg max-w-md">
                زمان مورد نظر خود را انتخاب کرده و میز دلخواهتان را مستقیماً از نقشه ۳ بعدی رزرو کنید.
              </p>
            </div>

            {/* Three.js Container */}
            <div
              ref={containerRef}
              className="relative w-full aspect-video bg-surface-container-low rounded-lg border border-outline-variant/20 overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing"
            />
            {/* UI Overlays for 3D Scene */}
            <div className="absolute top-6 right-6 z-20 pointer-events-none">
              <div className="bg-surface-container/80 backdrop-blur-md p-4 rounded-lg border border-outline-variant/30 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary shadow-[0_0_8px_rgba(242,202,80,0.8)]" />
                  <span className="type-overline">Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-outline-variant" />
                  <span className="type-overline">Reserved</span>
                </div>
              </div>
            </div>

            {/* Time Slider */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-3/4 max-w-md">
              <div className="bg-surface-container/90 backdrop-blur-lg p-6 rounded-lg border border-outline-variant/30 shadow-2xl">
                <div className="flex justify-between items-center mb-4">
                  <label className="type-overline text-primary">
                    تغییر زمان شبیه‌سازی
                  </label>
                  <span className="type-body text-primary font-bold">{timeDisplay}</span>
                </div>
                <input
                  type="range"
                  min="18"
                  max="23"
                  step="0.5"
                  defaultValue="19"
                  onChange={handleTimeChange}
                  className="w-full"
                />
              </div>
            </div>

            {/* Policies Summary */}
            <section className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10 luxury-shadow flex flex-wrap gap-x-8 gap-y-4 items-center">
              <h3 className="type-overline text-primary">
                اطلاعات ضروری
              </h3>
              <div className="flex items-center gap-2 text-on-surface-variant type-body-sm">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>کنسلی تا ۲۴ ساعت قبل</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant type-body-sm">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>حداکثر تا ۱۵ دقیقه تأخیر</span>
              </div>
            </section>
          </div>

          {/* Right Side: Reservation Form */}
          <div className="lg:w-1/3 pt-12 lg:pt-0">
            <div className="bg-surface-container p-8 rounded-lg border border-outline-variant/20 relative shadow-2xl h-full flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary/50 to-transparent rounded-t-lg" />
              <div>
                <h2 className="type-h3 text-primary-fixed-dim mb-8">
                  اطلاعات رزرو
                </h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex flex-col gap-2 group">
                    <label className="type-caption text-on-surface-variant uppercase tracking-widest group-focus-within:text-primary transition-colors">
                      میز انتخاب شده
                    </label>
                    <input
                      type="text"
                      readOnly
                      value={selectedTable}
                      className="w-full bg-transparent input-underline py-3 text-primary font-bold type-body-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-2 group">
                    <label className="type-caption text-on-surface-variant uppercase tracking-widest group-focus-within:text-primary transition-colors">
                      تعداد میهمانان
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        min="1"
                        max="10"
                        placeholder="۲ نفر"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full bg-transparent input-underline py-3 text-on-surface type-body-lg rounded-lg"
                      />
                      <svg className="w-5 h-5 absolute left-0 top-1/2 -translate-y-1/2 text-outline pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 group">
                    <label className="type-caption text-on-surface-variant uppercase tracking-widest group-focus-within:text-primary transition-colors">
                      نام و نام خانوادگی
                    </label>
                    <input
                      type="text"
                      placeholder="مثلاً: آریا سهرابی"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-transparent input-underline py-3 text-on-surface type-body-lg rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-2 group">
                    <label className="type-caption text-on-surface-variant uppercase tracking-widest group-focus-within:text-primary transition-colors">
                      یادداشت
                    </label>
                    <textarea
                      placeholder="حساسیت غذایی، مناسبت خاص..."
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-transparent input-underline py-3 text-on-surface type-body-lg resize-none rounded-lg"
                    />
                  </div>
                  <div className="pt-6">
                    <button
                      type="submit"
                      className="w-full bg-primary-container text-on-primary-container py-5 px-8 type-body-lg font-bold uppercase tracking-[0.2em] shimmer-hover relative group transition-all duration-300 active:scale-95 rounded-lg overflow-hidden"
                    >
                      <span className="relative z-10">ثبت نهایی رزرو</span>
                      <div className="absolute inset-0 border border-primary-fixed shadow-[inset_0_0_10px_rgba(212,175,55,0.3)] pointer-events-none" />
                    </button>
                    <p className="text-center text-on-surface-variant type-caption mt-4 opacity-60">
                      تأییدیه آنی پیامک خواهد شد.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
