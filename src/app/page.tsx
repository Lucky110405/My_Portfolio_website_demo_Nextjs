import Link from "next/link"
import Image from "next/image"
import { Twitter, Github, Linkedin, Mail } from "lucide-react"
import { JSX, SVGProps } from "react"


export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#home" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Home
          </Link>
          <Link href="#project" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Project
          </Link>
          <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Skills
          </Link>
          <Link href="#experience" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Experience
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section id="home" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">M Lucky</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Aspiring Full-Stack Developer and Cloud Engineer
                  </p>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Aiming to solve real-world problemsI through functional web applications and softwares.
                  </p>
                </div>
              </div>
              <Image
                src="/1725787262137sde6r.webp"
                width="550"
                height="550"
                alt="Lucky"
                className="rounded-full mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section id="project" className="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-700">My Work</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of my recent projects and what i learned.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              <Link
                href="#"
                target="_blank"
                className="group relative overflow-hidden rounded-xl transition-all after:absolute after:inset-0 after:bg-black after:opacity-0 after:transition-all hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                prefetch={false}
              >
                <img
                  src="/ToDo.jpeg"
                  width="550"
                  height="310"
                  alt="Project"
                  className="mx-auto aspect-video w-full object-cover object-center"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 p-4 text-center text-primary-foreground opacity-0 transition-all group-hover:opacity-100 group-focus:opacity-100">
                  <h3 className="text-xl font-bold text-gray-700">Project 1</h3>
                  <p className="text-sm text-gray-700">A ToDo app in Node.js.</p>
                </div>
              </Link>
              <Link
                href="https://github.com/Lucky110405/YouTube-homepage-clone.git"
                target="_blank"
                className="group relative overflow-hidden rounded-xl transition-all after:absolute after:inset-0 after:bg-black after:opacity-0 after:transition-all hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                prefetch={false}
              >
                <img
                  src="/YT_clone.jpeg"
                  width="550"
                  height="310"
                  alt="Project"
                  className="mx-auto aspect-video w-full object-cover object-center"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 p-4 text-center text-primary-foreground opacity-0 transition-all group-hover:opacity-100 group-focus:opacity-100">
                  <h3 className="text-xl font-bold text-gray-700">Project 2</h3>
                  <p className="text-sm text-gray-700">A YouTube frontend clone.</p>
                </div>
              </Link>
              <Link
                href="https://github.com/Lucky110405/shorten-url.git"
                target="_blank"
                className="group relative overflow-hidden rounded-xl transition-all after:absolute after:inset-0 after:bg-black after:opacity-0 after:transition-all hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                prefetch={false}
              >
                <img
                  src="/short_URL.jpeg"
                  width="550"
                  height="310"
                  alt="Project"
                  className="mx-auto aspect-video w-full object-cover object-center"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 p-4 text-center text-primary-foreground opacity-0 transition-all group-hover:opacity-100 group-focus:opacity-100">
                  <h3 className="text-xl font-bold text-gray-700">Project 3</h3>
                  <p className="text-sm text-gray-700">A Shorten URL app.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Skills</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  These are the technical and soft skills I have mastered so far,<br /> and I am committed to continuous learning.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Technical Skills</h3>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <CodeIcon className="w-5 h-5" />
                    <span>JavaScript</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CodeIcon className="w-5 h-5" />
                    <span>React</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CodeIcon className="w-5 h-5" />
                    <span>Node.js</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CodeIcon className="w-5 h-5" />
                    <span>MongoDB</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CodeIcon className="w-5 h-5" />
                    <span>Git</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CodeIcon className="w-5 h-5" />
                    <span>Python</span>
                  </li>
                </ul>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Soft Skills</h3>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <LightbulbIcon className="w-5 h-5" />
                    <span>Problem-Solving</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <LightbulbIcon className="w-5 h-5" />
                    <span>Critical Thinking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <LightbulbIcon className="w-5 h-5" />
                    <span>Communication</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <LightbulbIcon className="w-5 h-5" />
                    <span>Teamwork</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <LightbulbIcon className="w-5 h-5" />
                    <span>Adaptability</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <LightbulbIcon className="w-5 h-5" />
                    <span>Time Management</span>
                  </li>
                </ul>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Tools & Frameworks</h3>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <PenToolIcon className="w-5 h-5" />
                    <span>Tailwind CSS and Shadcn/ui</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <PenToolIcon className="w-5 h-5" />
                    <span>Next.js</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <PenToolIcon className="w-5 h-5" />
                    <span>Vercel</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <PenToolIcon className="w-5 h-5" />
                    <span>AWS</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <PenToolIcon className="w-5 h-5" />
                    <span>Postman API</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <PenToolIcon className="w-5 h-5" />
                    <span>Docker</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Current Experience</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I am currently pursuing B.Tech in Computer Science while actively working on personal projects. <br />I am always on the lookout for new challenges and opportunities to learn and grow. Feel free to reach out if you have a project where I can contribute.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer id="contact" className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p>&copy; 2024 M Lucky. All rights reserved.</p>
          <div className="flex space-x-4">
            <p>Contact me on : </p>
            <Link href="https://x.com/lucky110405" target="_blank" aria-label="Twitter">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link href="https://github.com/Lucky110405" target="_blank" aria-label="GitHub">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/lucky-m" target="_blank" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="mailto:mlucky110405@gmail.com" target="_blank" aria-label="Email">
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function CodeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function LightbulbIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
  )
}


function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function PenToolIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
      <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
      <path d="m2.3 2.3 7.286 7.286" />
      <circle cx="11" cy="11" r="2" />
    </svg>

  )
}