import Reveal from "./Reveal";

const GROUPS = [
  {
    title: "Hardware",
    tags: [
      "PCB Design",
      "Firmware / RTOS",
      "LabVIEW FPGA",
      "Custom ATE",
      "HIL Rigs",
      "Sensors & DAQ",
      "Siemens PLC/HMI",
      "Beckhoff PLC/HMI",
      "Allen-Bradley PLC/HMI",
      "Motion Control",
      "Vision Inspection",
    ],
  },
  {
    title: "Design Software",
    tags: ["SolidWorks", "AutoCAD", "Fusion 360", "KiCad", "Eagle"],
  },
  {
    title: "Development Software",
    tags: [
      "LabVIEW (Desktop, RT, FPGA)",
      "VS Code",
      "CODESYS",
      "STM32CubeMX",
      "TIA Portal",
      "Python",
      "C / C++",
      "Power BI",
      "Azure IoT",
      "Flutter",
      "SCADA",
      "MES",
    ],
  },
  {
    title: "Protocols & Integration",
    tags: [
      "PROFINET",
      "EtherNet/IP",
      "EtherCAT",
      "Modbus TCP/IP",
      "PROFIBUS DP/PA",
      "CANopen",
      "CC-Link",
      "HART",
      "OPC UA",
      "MQTT",
      "DNP3",
      "IEC 61850",
    ],
  },
];

export default function Toolkit() {
  return (
    <section id="toolkit" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            The toolkit
          </h2>
        </Reveal>
        <Reveal delay={50}>
          <p className="mt-4 max-w-[680px] text-lg text-muted">Hardware and software I reach for regularly, across test rigs, plant floors, and product builds.</p>
        </Reveal>
        <div className="mt-12 space-y-10">
          {GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={100 + i * 75}>
              <div>
                <h3 className="text-sm font-medium tracking-wide text-muted uppercase">
                  {g.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {g.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-4 py-2 text-sm font-medium text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
