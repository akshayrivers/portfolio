import './App.css'
import './components/AboutMe'
import './components/Blogs'
import './components/Projects'
import './components/Skills'
import './components/Experience'
import './components/Contact'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Blogs from './components/Blogs'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Profilebar from './components/profilebar'
import image from './jan-canty-eBupAjL0HR0-unsplash.jpg'
import image1 from './chuttersnap-hqVGQ4-D0NI-unsplash.jpg'
import image2 from './jakub-dziubak-XtUd5SiX464-unsplash.jpg'
import image3 from './19430.jpg'
import image4 from './3d-rendering-abstract-black-white-background.jpg'
import image5 from './94616eca-1f76-4320-a32c-0878f7c5846c.jpg'

function App() {
  return (
    <div className="flex space-x-1 bg-black">

      {/* Sidebar */}
      <div className="flex">
        <Profilebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow ml-1/4">
        <div id="about" className="bg-fixed text-slate-400" style={{ 
          backgroundImage: `url(${image})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh'
        }}> 
          <AboutMe />
        </div>

        <div id="projects" className="bg-fixed text-slate-800" style={{ 
          backgroundImage: `url(${image1})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh'
        }}>
          <Projects />
        </div>

        <div id="blogs" className="bg-fixed text-slate-800" style={{ 
          backgroundImage: `url(${image2})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh'
        }}>
          <Blogs />
        </div>

        <div id="skills" className="bg-fixed text-slate-400" style={{ 
          backgroundImage: `url(${image3})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh'
        }}>
          <Skills />
        </div>

        <div id="experience" className="bg-fixed text-slate-800" style={{ 
          backgroundImage: `url(${image4})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh'
        }}>
          <Experience />
        </div>

        <div id="contact" className="bg-fixed text-slate-800" style={{ 
          backgroundImage: `url(${image5})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh'
        }}>
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default App;

// function App() {
//   return (
//     <div className='flex space-x-1 bg-black'>

//       <div className="flex">
//                 <Profilebar />
//             </div>

//       {/* Main Content */}
//       <div className="flex-grow ml-1/4">
//         <div className="bg-fixed text-slate-400" style={{ 
//           backgroundImage: `url(${image})`, 
//           backgroundSize: 'cover',
//           backgroundPosition: 'fill',
//           minHeight: '100vh'
//         }}> 
//           <AboutMe />
//         </div>

//         <div className=" flex-auto bg-fixed text-slate-800" style={{ 
//           backgroundImage: `url(${image1})`, 
//           backgroundSize: 'cover',
//           backgroundPosition: 'fill',
//           minHeight: '100vh'
//         }}>
//           <Projects />
//         </div>

//         <div className="flex-auto bg-fixed text-slate-800" style={{ 
//           backgroundImage: `url(${image2})`, 
//           backgroundSize: 'cover',
//           backgroundPosition: 'fill',
//           minHeight: '100vh'
//         }}>
//           <Blogs />
//         </div>

//         <div className="flex-auto bg-fixed text-slate-400" style={{ 
//           backgroundImage: `url(${image3})`, 
//           backgroundSize: 'cover',
//           backgroundPosition: 'center center',
//           minHeight: '100vh'
//         }}>
//           <Skills />
//         </div>

//         <div className="flex-auto bg-fixed text-slate-800" style={{ 
//           backgroundImage: `url(${image4})`, 
//           backgroundSize: 'cover',
//           backgroundPosition: 'fill',
//           minHeight: '100vh'
//         }}>
//           <Experience />
//         </div>

//         <div className=" flex-auto bg-fixed text-slate-800" style={{ 
//           backgroundImage: `url(${image5})`, 
//           backgroundSize: 'cover',
//           backgroundPosition: 'fill',
//           minHeight: '100vh'
//         }}>
//           <Contact />
//         </div>
//       </div>
//     </div>
//   )
// }

//export default App
