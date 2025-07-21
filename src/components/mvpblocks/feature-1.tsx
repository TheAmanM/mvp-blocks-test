import {
  BookOpenCheck,
  ShieldCheck,
  GitCompareArrows,
  WandSparkles,
  Library,
  Github,
} from "lucide-react";

const features = [
  {
    icon: <BookOpenCheck className="h-6 w-6" />,
    title: "Live Documentation Engine",
    desc: "Our vector database continuously ingests the latest official docs from major frameworks, ensuring your AI assistant is never out of sync with reality.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Proactive Security Shield",
    desc: "DocDev automatically detects when generated code uses vulnerable patterns or deprecated versions, shielding your projects from known threats before they're committed.",
  },
  {
    icon: <GitCompareArrows className="h-6 w-6" />,
    title: "Integrated Diff Viewer",
    desc: "Never guess what the AI changed. See every addition and deletion in a clear, interactive diff right inside your editor. Accept with confidence, reject with a click.",
  },
  {
    icon: <WandSparkles className="h-6 w-6" />,
    title: "Precision Code Generation",
    desc: "Because we reference the source of truth, DocDev generates code with higher accuracy and context-awareness, reducing the time you spend refactoring and debugging.",
  },
  {
    icon: <Library className="h-6 w-6" />,
    title: "Broad Framework Support",
    desc: "From Next.js and Tailwind CSS to the most popular libraries in your stack. Our support grows with the ecosystem, keeping you at the cutting edge.",
  },
  {
    icon: <Github className="h-6 w-6" />,
    title: "Open Source & Community-Driven",
    desc: "DocDev is built for the community, by the community. Contribute on GitHub and help shape the future of reliable AI-powered development.",
  },
];

export default function Feature1() {
  return (
    <section id="features" className="relative py-14">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="relative mx-auto max-w-2xl sm:text-center">
          <div className="relative z-10">
            <h3 className="font-geist mt-4 text-3xl font-normal tracking-tighter sm:text-4xl md:text-5xl">
              Code at the speed of now
            </h3>
            <p className="font-geist mt-3 text-foreground/60">
              AI coding assistants are powerful, but they operate from a frozen
              past. DocDev breaks this cycle by grounding every line of
              generated code in live, current documentation. Stop wasting time
              on deprecated functions and chasing down phantom bugs. This is how
              modern development was meant to be: fast, accurate, and secure.
            </p>
          </div>
          <div
            className="absolute inset-0 mx-auto h-44 max-w-xs blur-[118px]"
            style={{
              background:
                "linear-gradient(152.92deg, rgba(var(--color-primary-1), 0.2) 4.54%, rgba(var(--color-primary-1), 0.26) 34.2%, rgba(var(--color-primary-2), 0.1) 77.55%)",
            }}
          ></div>
        </div>
        <hr className="mx-auto mt-5 h-px w-1/2 bg-foreground/30" />
        <div className="relative mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="transform-gpu space-y-3 rounded-xl border bg-transparent p-4 [box-shadow:0_-20px_80px_-20px_#3b82f62f_inset]"
              >
                <div className="w-fit transform-gpu rounded-full border p-4 text-primary [box-shadow:0_-20px_80px_-20px_#3b82f63f_inset] dark:[box-shadow:0_-20px_80px_-20px_#ff7aa40f_inset]">
                  {item.icon}
                </div>
                <h4 className="font-geist text-lg font-bold tracking-tighter">
                  {item.title}
                </h4>
                <p className="text-gray-500">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
