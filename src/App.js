import './App.css';
import {useEffect} from 'react'
import Navbar from './components/Navbar';
import Hiro from './components/Hiro';
import Skills from './components/Skills'
import Honors from './components/Honors';
import Certs from './components/Certs';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
    useEffect(() => {
      document.title = 'Tu Lan (Bryant)';
      AOS.init();
    }, []);
  return (
    <div className="px-6 lg:px-20 xl:px-36 bg-dark-500">
      <Navbar />
      <Hiro />
      <Skills />
      <Honors />
      <Certs />
      <Footer />
    </div>
  );
}

export default App;


// eslint-disable-next-line no-unused-vars

let me = {
  name: "Tu Lan",
  programming_language: ["C#", "Python", "JavaScript", "C++", "Java"],
  dev: ["React", "Node.js", ".Net", "aspnet"],
  operating_system: ["Windows", "Ubuntu/Debian"],
  imperative_scripting: ["Powershell", "CLI", "Bash"],
  vcs: ["Azure DevOps", "Github"],
  web_servers: ["Nginx", "Apache", "IIS"],
  networking: ["OSI Model", "HTTP(S)", "SSL/TLS", "DNS", "SSH"],
  cloud_providers: ["Azure", "AWS"],
  serverless: ["Azure Functions", "Azure Logic Apps", "AWS Lambda"],
  IaC: ["Azure Resource Manager", "Azure Bicep", "Terraform"],
  configuration: ["Ansible"],
  secret_management: ["Azure Key Vault", "Terraform Vault"],
  containerization: ["Azure Container service", "Azure Kubernetes Services", "Azure Container Registry", "Docker"],
  monitoring: ["Azure Monitor", "Azure Application Insights", "Azure Log Analytic Workspace"],
  /* more important */
  message: "Welcome to my portfolio :)"
}






