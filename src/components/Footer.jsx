import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function SideIcons() {
    return (
        <footer className='flex gap-8 justify-center mt-24'>
            <div className='w-14 bg-black h-14 rounded-full border flex items-center justify-center cursor-pointer transform transition-all duration-300 hover:scale-110'>
                <a href='https://github.com/jkberiksson' target='_blank'>
                    <FiGithub color='white' size={18} />
                </a>
            </div>
            <div className='w-14 h-14 bg-black rounded-full border flex items-center justify-center cursor-pointer transform transition-all duration-300 hover:scale-110'>
                <a href='mailto: jkberiksson@gmail.com'>
                    <FiMail color='white' size={18} />
                </a>
            </div>
            <div className='w-14 h-14 bg-black rounded-full border flex items-center justify-center cursor-pointer transform transition-all duration-300 hover:scale-110'>
                <a href='https://www.linkedin.com/in/jakob-eriksson-60904b207/' target='_blank'>
                    <FiLinkedin color='white' size={18} />
                </a>
            </div>
        </footer>
    );
}
