import { motion } from 'framer-motion';

export default function About() {
    return (
        <div className='text-center'>
            {/* Heading */}
            <h1 className='text-9xl mb-10'>About</h1>

            {/* Content Grid (Similar to Work Page) */}
            <div>
                {/* About Section */}
                <div className='lg:w-1/2 lg:mx-auto mb-10'>
                    <h2 className='text-3xl font-bold'>Who Am I?</h2>
                    <p className='text-lg font-sans'>
                        I'm a passionate developer who loves building modern and user-friendly web applications. I enjoy solving problems,
                        learning new technologies, and constantly improving my skills. My focus is on creating clean, efficient, and
                        scalable solutions that enhance user experiences. Whether it's front-end design or diving into back-end logic, I
                        strive to bring ideas to life with creativity and precision. 🚀
                    </p>
                </div>

                {/* Skills Section */}
                <div className='lg:w-1/2 lg:mx-auto mb-10'>
                    <h2 className='text-3xl font-bold'>Skills</h2>
                    <ul className='text-lg font-sans flex flex-wrap justify-center gap-2 items-center'>
                        <li>HTML</li>
                        <div className='h-[6px] w-[6px] bg-black rounded-full'></div>
                        <li>CSS</li>
                        <div className='h-[6px] w-[6px] bg-black rounded-full'></div>
                        <li>JavaScript</li>
                        <div className='h-[6px] w-[6px] bg-black rounded-full'></div>
                        <li>React.js</li>
                        <div className='h-[6px] w-[6px] bg-black rounded-full'></div>
                        <li>Next.js</li>
                        <div className='h-[6px] w-[6px] bg-black rounded-full'></div>
                        <li>Node.js</li>
                        <div className='h-[6px] w-[6px] bg-black rounded-full'></div>
                        <li>Express.js</li>
                        <div className='h-[6px] w-[6px] bg-black rounded-full'></div>
                        <li>MongoDB</li>
                        <div className='h-[6px] w-[6px] bg-black rounded-full'></div>
                        <li>Styled Components</li>
                        <div className='h-[6px] w-[6px] bg-black rounded-full'></div>
                        <li>Tailwind CSS</li>
                        <div className='h-[6px] w-[6px] bg-black rounded-full'></div>
                        <li>Framer Motion</li>
                        <div className='h-[6px] w-[6px] bg-black rounded-full'></div>
                        <li>Git & GitHub</li>
                        <div className='h-[6px] w-[6px] bg-black rounded-full'></div>
                        <li>Docker</li>
                    </ul>
                </div>

                {/* Experience Section */}
                <div className='lg:w-1/2 lg:mx-auto mb-10'>
                    <h2 className='text-3xl font-bold'>Experience</h2>
                    <div className='text-lg space-y-2 font-sans'>
                        <p>
                            <strong>Freelance</strong> - Web Development (2025 - Present)
                        </p>
                        <p>
                            <strong>Blekinge Technical University</strong> - Full-Stack Developer (2023 - 2025)
                        </p>
                        <p>
                            <strong>University West</strong> - Web Design (2021 - 2022)
                        </p>
                    </div>
                </div>

                {/* Contact Section */}
                <div className='lg:w-1/2 lg:mx-auto mb-10'>
                    <h2 className='text-3xl font-bold'>Contact</h2>
                    <p className='text-lg  font-sans'>Email: jkberiksson@gmail.com</p>
                    <p className='text-lg  font-sans'>Location: Kalmar, Sweden</p>
                </div>
            </div>
        </div>
    );
}
