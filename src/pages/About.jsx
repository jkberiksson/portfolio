import { motion } from 'framer-motion';

export default function About() {
    return (
        <div className='text-center'>
            {/* Heading */}
            <h1 className='text-9xl mb-10'>About Me</h1>

            {/* Content Grid (Similar to Work Page) */}
            <div>
                {/* About Section */}
                <div className='lg:w-1/2 lg:mx-auto mb-10'>
                    <h2 className='text-3xl font-bold'>Who I Am</h2>
                    <p className='text-lg font-sans'>
                        I'm a passionate developer who loves creating web applications and exploring new technologies. I specialize in
                        building modern and scalable solutions. 🚀
                    </p>
                </div>

                {/* Skills Section */}
                <div className='lg:w-1/2 lg:mx-auto mb-10'>
                    <h2 className='text-3xl font-bold'>Skills</h2>
                    <ul className='text-lg font-sans'>
                        <li>JavaScript</li>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>CSS & Tailwind</li>
                        <li>Framer Motion</li>
                        <li>Next.js</li>
                    </ul>
                </div>

                {/* Experience Section */}
                <div className='lg:w-1/2 lg:mx-auto mb-10'>
                    <h2 className='text-3xl font-bold'>Experience</h2>
                    <div className='text-lg space-y-2 font-sans'>
                        <p>
                            <strong>Web Development</strong> - Freelance (2025 - Present)
                        </p>
                        <p>
                            <strong>Full-Stack Developer</strong> - Blekinge Technical University (2023 - 2025)
                        </p>
                        <p>
                            <strong>Web Design</strong> - University West (2021 - 2022)
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
