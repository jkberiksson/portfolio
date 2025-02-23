import designImg from '../assets/design.png';
import documentImg from '../assets/document.png';
import foodImg from '../assets/food.png';
import galleryImg from '../assets/gallery.png';
import gamesImg from '../assets/games.png';
import gorpImg from '../assets/gorp.png';
import jsImg from '../assets/js.png';
import spellcheckerImg from '../assets/spellchecker.png';
import trainImg from '../assets/train.png';
import wattImg from '../assets/watt.png';
import weatherImg from '../assets/weather.png';
import webScrollAnimationImg from '../assets/web-scroll-animation.png';

export const projects = [
    {
        title: 'Web Scroll Animations',
        img: webScrollAnimationImg,
        description:
            'A website design focusing on scroll-animations. Built with React and Next.js. For scroll animations, I use framer motion and Lenis scroll for smooth scrolling. Designed for both web and mobile.',
        demo: 'https://timely-mochi-f37d29.netlify.app/',
        github: 'https://github.com/jkberiksson/scroll-animations',
    },
    {
        title: 'Watt är vi på väg?',
        img: wattImg,
        description:
            'Fullstack e-scooter application containing an app for renting scooter and  websolution for users and admins. Built with React as frontend and express as backend. Contact me for livedemo.',
        demo: 'https://vteam-14-app.netlify.app',
        github: 'https://github.com/Wattarvipavag',
        tags: ['react', 'sass', 'mapbox', 'react icons', 'express', 'node.js', 'mongodb', 'mongoose'],
    },
    {
        title: 'Image Gallery',
        img: galleryImg,
        description:
            'An image gallery app built with React. Uses Framer Motion for animations and Styled Components for CSS. Designed for web only.',
        demo: 'https://jkberiksson-image-gallery.netlify.app/',
        github: 'https://github.com/jkberiksson/image-gallery',
        tags: ['react', 'framer motion', 'styled components', 'feather icons'],
    },
    {
        title: 'Train Delays',
        img: trainImg,
        description: 'Web application built with vanilla JavaScript. Highlights train delays in Sweden. Designed for mobile only.',
        demo: 'https://www.student.bth.se/~jaei23/dbwebb-kurser/webapp/me/kmom10/proj/',
        github: 'https://github.com/jkberiksson/train-delays',
        tags: ['javascript', 'web components', 'css'],
    },
    {
        title: 'Serenita Design',
        img: designImg,
        description:
            'A simple website built with React. Features animations using Framer Motion and styling with Tailwind CSS. Designed for web only.',
        demo: 'https://jkberiksson-serenita-website-design.netlify.app/',
        github: 'https://github.com/jkberiksson/Serenita-website-design',
        tags: ['react', 'framer motion', 'tailwind css'],
    },
    {
        title: 'Documents',
        img: documentImg,
        description:
            'Web application built with React as frontend and express as backend. Ability to create, read, update and delete documents. Also able to share docs with others and make comments to each document. Contact me for livedemo.',
        demo: 'https://www.student.bth.se/~paar24/editor',
        github: 'https://github.com/jkberiksson/jsramverkHT24-frontend',
        tags: ['react', 'tailwind css', 'react feather', 'socket.io', 'express', 'node.js', 'mongodb', 'mongoose'],
    },
    {
        title: 'Games 2024',
        img: gamesImg,
        description: 'Web application built with React. Highlights games from 2024. Designed for both web and mobile.',
        demo: 'https://jkberiksson-popgames2024.netlify.app/',
        github: 'https://github.com/jkberiksson/games',
        tags: ['react', 'vite', 'tailwind css', 'react-feather', 'framer motion'],
    },

    {
        title: 'Javascript Games',
        img: jsImg,
        description:
            'A collection of 5 small games built with HTML, CSS, and vanilla JavaScript. Created as a final exam project. Designed for web only.',
        demo: 'https://www.student.bth.se/~jaei23/dbwebb-kurser/js/me/public/kmom10.html',
        tags: ['javascript', 'html', 'css', 'jsdoc'],
    },
    {
        title: 'Bew Gorp',
        img: gorpImg,
        description:
            'A portfolio site to practice CSS skills. Built with the Pico CMS and Twig template engine, using Sass for styling and Markdown for content. Designed for both web and mobile.',
        demo: 'https://www.student.bth.se/~jaei23/dbwebb-kurser/design/me/kmom10/',
        tags: ['html', 'css', 'sass', 'pico', 'twig', 'markdown'],
    },
    {
        title: 'Spellchecker',
        img: spellcheckerImg,
        description:
            'A Flask app that checks words against a dictionary. Users can switch to other dictionaries with more words. Designed for web only.',
        demo: 'https://www.student.bth.se/~jaei23/dbwebb-kurser/oopython/me/kmom10/spellchecker/app.cgi',
        tags: ['python', 'flask', 'html', 'css'],
    },
    {
        title: 'What´s the Weather?',
        img: weatherImg,
        description:
            'A React app for checking weather updates. Built with Framer Motion for animations and Tailwind CSS for styling. Designed for both web and mobile.',
        demo: 'https://jkberiksson-weather.netlify.app/',
        github: 'https://github.com/jkberiksson/weather',
        tags: ['react', 'framer motion', 'tailwind css', 'react icons'],
    },
    {
        title: 'Foodies',
        img: foodImg,
        description:
            'A React app to browse recipes. Includes navigation with React Router DOM and animations with Framer Motion. Designed for both web and mobile.',
        demo: 'https://jkberiksson-food.netlify.app/',
        github: 'https://github.com/jkberiksson/food',
        tags: ['react', 'framer-motion', 'styled components', 'react feather', 'react router dom'],
    },
];
