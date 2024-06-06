import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function PlantCard() {
  return (
    <div className="grid min-h-screen w-full bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 dark:from-purple-900 dark:via-pink-900 dark:to-red-900">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md dark:bg-gray-950/80 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LeafIcon className="w-6 h-6 text-rose-500" />
          <h1 className="text-lg font-semibold text-black">
            Smart Garden: Lettuce
          </h1>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full shadow-md">
          <MenuIcon className="w-6 h-6 text-black" />
          <span className="sr-only">Menu</span>
        </Button>
      </header>
      <main className="flex-1 grid gap-2 p-4">
        <section className="bg-white rounded-lg shadow-md dark:bg-gray-900 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <LeafIcon className="w-6 h-6 text-rose-500" />
              <div>
                <h2 className="text-base font-semibold text-black">
                  Environment
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Temperature, humidity, soil moisture, and light
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 p-1 items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <div>
                <p className="text-lg font-semibold text-black">24°C</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Temperature
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div>
                <p className="text-lg font-semibold text-black">65%</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Humidity
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div>
                <p className="text-lg font-semibold text-black">40%</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Soil Moisture
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div>
                <p className="text-lg font-semibold text-black">8000</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Light (lux)
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white rounded-lg shadow-md dark:bg-gray-900">
          <div className="p-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <LightbulbIcon className="w-6 h-6 text-rose-500" />
              <div>
                <h2 className="text-lg font-semibold text-black">Lights</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Control your grow lights
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full shadow-md"
            >
              <CalendarIcon className="w-6 h-6 text-rose-500" />
              <span className="sr-only">Set schedule</span>
            </Button>
          </div>
          <div className="grid grid-cols-4 gap-4 p-1">
            <div className="flex flex-col items-center gap-2">
              <Button
                variant="ghost"
                className="rounded-lg p-2 flex flex-col items-center gap-2 hover:bg-rose-500 hover:text-white shadow-md"
              >
                <SunIcon className="w-25 h-25 text-rose-500 hover:text-white" />
              </Button>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Day
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button
                variant="ghost"
                className="rounded-lg p-2 flex flex-col items-center gap-2 bg-rose-500 text-white shadow-md"
              >
                <MoonIcon className="w-25 h-25 text-white" />
              </Button>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Night
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button
                variant="ghost"
                className="rounded-lg p-2 flex flex-col items-center gap-2 hover:bg-rose-500 hover:text-white shadow-md"
              >
                <LeafIcon className="w-25 h-25 text-rose-500 hover:text-white" />
              </Button>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Grow
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button
                variant="ghost"
                className="rounded-lg p-2 flex flex-col items-center gap-2 hover:bg-rose-500 hover:text-white shadow-md"
              >
                <BotIcon className="w-25 h-25 text-rose-500 hover:text-white" />
              </Button>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Auto
              </span>
            </div>
          </div>
        </section>
        <section className="bg-white rounded-lg shadow-md dark:bg-gray-900">
          <div className="p-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FlameIcon className="w-6 h-6 text-rose-500" />
              <div>
                <h2 className="text-lg font-semibold text-black">Heating</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Control your heating system
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full shadow-md"
            >
              <CalendarIcon className="w-6 h-6 text-rose-500" />
              <span className="sr-only">Set schedule</span>
            </Button>
          </div>
          <div className="grid grid-cols-4 gap-4 p-1 items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <Button
                variant="ghost"
                className="rounded-lg p-2 flex flex-col items-center gap-2 bg-rose-500 text-white shadow-md"
              >
                <PowerIcon className="w-25 h-25 text-white" />
              </Button>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                On
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button
                variant="ghost"
                className="rounded-lg p-2 flex flex-col items-center gap-2 hover:bg-rose-500 hover:text-white shadow-md"
              >
                <PowerIcon className="w-25 h-25 text-rose-500 hover:text-white" />
              </Button>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Off
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button
                variant="ghost"
                className="rounded-lg p-2 flex flex-col items-center gap-2 hover:bg-rose-500 hover:text-white shadow-md"
              >
                <BotIcon className="w-25 h-25 text-rose-500 hover:text-white" />
              </Button>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Auto
              </span>
            </div>
          </div>
        </section>
        <section className="bg-white rounded-lg shadow-md dark:bg-gray-900">
          <div className="p-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SproutIcon className="w-6 h-6 text-rose-500" />
              <div>
                <h2 className="text-lg font-semibold text-black">
                  Growth Progress
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Track your plant's growth
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full shadow-md"
            >
              <CalendarIcon className="w-6 h-6 text-rose-500" />
              <span className="sr-only">View history</span>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-2 p-1">
            <div className="flex items-center justify-center">
              <div className="relative w-16 h-16">
                <div className="text-rose-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-xl font-semibold text-black">25</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      / 100 days
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-2 p-2">
              <div className="flex items-center gap-2">
                <Avatar className="w-10 h-10 border">
                  <img src="/placeholder.svg" alt="@shadcn" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Your plant is currently in the seedling stage.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function BotIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function FlameIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

function LeafIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function LightbulbIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MoonIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function PowerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </svg>
  );
}

function SproutIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 20h10" />
      <path d="M10 20c5.5-2.5.8-6.4 3-10" />
      <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
      <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
    </svg>
  );
}

function SunIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}
