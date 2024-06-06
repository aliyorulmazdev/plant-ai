"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ResponsiveLine } from "@nivo/line";
import { HeaterIcon } from "lucide-react";

export default function PlantCard() {
  return (
    <Card className="w-full max-w-md bg-white dark:bg-gray-950 rounded-lg shadow-lg">
      <div className="relative">
        <img
          src="/placeholder.svg"
          alt="Flower"
          className="rounded-t-lg object-cover w-full"
        />
        <div className="absolute top-4 right-4 bg-gray-900/50 text-white px-2 py-1 rounded-md text-sm font-semibold">
          Day 45
        </div>
      </div>
      <CardContent className="p-6 grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 relative">
            <ThermometerIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <div className="flex flex-col gap-1">
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Temperature
              </div>
              <div className="font-bold">18°C</div>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <button className="ml-auto">
                  <CalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <LineChart className="w-full aspect-[4/3]" />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex items-center gap-2 relative">
            <DropletsIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <div className="flex flex-col gap-1">
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                pH
              </div>
              <div className="font-bold">6.5</div>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <button className="ml-auto">
                  <CalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <LineChart className="w-full aspect-[4/3]" />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex items-center gap-2 relative">
            <CloudLightningIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <div className="flex flex-col gap-1">
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                EC
              </div>
              <div className="font-bold">1.2 mS/cm</div>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <button className="ml-auto">
                  <CalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <LineChart className="w-full aspect-[4/3]" />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex items-center gap-2">
            <AnvilIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <div className="flex flex-col gap-1">
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Valve
              </div>
              <div className="font-bold text-green-500">Open</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FanIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <div className="flex flex-col gap-1">
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Fan
              </div>
              <div className="font-bold text-green-500">On</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <LightbulbIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <div className="flex flex-col gap-1">
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Lighting
              </div>
              <div className="font-bold text-green-500">On</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <HeaterIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <div className="flex flex-col gap-1">
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Heating
              </div>
              <div className="font-bold text-green-500">On</div>
            </div>
          </div>
        </div>

        <Separator />
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <DropletIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <div className="flex flex-col gap-1">
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Last Watered
              </div>
              <div className="font-bold">2024-06-01 12:00</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <LeafIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <div className="flex flex-col gap-1">
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Last Fed
              </div>
              <div className="font-bold">2024-05-15 10:30</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <SproutIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <div className="flex flex-col gap-1">
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Last Food Addition
              </div>
              <div className="font-bold">2024-04-20 15:45</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <BugIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <div className="flex flex-col gap-1">
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Last Beneficial Bacteria
              </div>
              <div className="font-bold">2024-03-01 09:15</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <PlugIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <div className="flex flex-col gap-1">
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Water Tank
              </div>
              <div className="font-bold">426/1040</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <PlugIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <div className="flex flex-col gap-1">
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                EC Tank
              </div>
              <div className="font-bold">426/1040</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <PlugIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <div className="flex flex-col gap-1">
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                pH Tank
              </div>
              <div className="font-bold">426/1040</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <LightbulbIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <div className="flex flex-col gap-1">
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Current Light Rate
              </div>
              <div className="font-bold">283/600</div>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1 flex items-center gap-2">
            <DropletIcon className="w-4 h-4" />
            <span className="font-semibold">Water Now</span>
          </Button>
          <Button variant="outline" className="flex-1 flex items-center gap-2">
            <AnvilIcon className="w-4 h-4" />
            <span className="font-semibold">Toggle Valve</span>
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1 flex items-center gap-2">
            <LeafIcon className="w-4 h-4" />
            <span className="font-semibold">Add Nutrient</span>
          </Button>
          <Button variant="outline" className="flex-1 flex items-center gap-2">
            <LeafIcon className="w-4 h-4" />
            <span className="font-semibold">Add Bacteria</span>
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1 flex items-center gap-2">
            <DropletsIcon className="w-4 h-4" />
            <span className="font-semibold">Lower pH</span>
          </Button>
          <Button variant="outline" className="flex-1 flex items-center gap-2">
            <DropletsIcon className="w-4 h-4" />
            <span className="font-semibold">Increase pH</span>
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1 flex items-center gap-2">
            <FanIcon className="w-4 h-4" />
            <span className="font-semibold">Toggle Fan</span>
          </Button>
          <Button variant="outline" className="flex-1 flex items-center gap-2">
            <CloudLightningIcon className="w-4 h-4" />
            <span className="font-semibold">Toggle Lighting</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function AnvilIcon(props) {
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
      <path d="M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4" />
      <path d="M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z" />
      <path d="M9 12v5" />
      <path d="M15 12v5" />
      <path d="M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1" />
    </svg>
  );
}

function BugIcon(props) {
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
      <path d="m8 2 1.88 1.88" />
      <path d="M14.12 3.88 16 2" />
      <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
      <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
      <path d="M12 20v-9" />
      <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
      <path d="M6 13H2" />
      <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
      <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
      <path d="M22 13h-4" />
      <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
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

function CloudLightningIcon(props) {
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
      <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
      <path d="m13 12-3 5h4l-3 5" />
    </svg>
  );
}

function DropletIcon(props) {
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
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  );
}

function DropletsIcon(props) {
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
      <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
      <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
    </svg>
  );
}

function FanIcon(props) {
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
      <path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z" />
      <path d="M12 12v.01" />
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

function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

function PlugIcon(props) {
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
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
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

function ThermometerIcon(props) {
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
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
    </svg>
  );
}
