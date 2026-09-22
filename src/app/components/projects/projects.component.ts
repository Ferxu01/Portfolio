import { Component } from '@angular/core';
import { ProjectCard } from './projects.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  readonly projectCards: ProjectCard[] = [
    {
      id: 1,
      title: 'Genesis 2.0',
      description:
        'Genesis 2.0 es una herramienta web para la simulación de entornos Smart University mediante la generación de datos sintéticos para sensores IoT. Permite crear patrones temporales complejos y exportar datasets realistas para su integración en aplicaciones de analítica externa.',
      icon: 'cards/genesis.png',
      link: '',
    },
    {
      id: 2,
      title: 'Visionary',
      description:
        'Visionary es una plataforma educativa e interactiva que combina un modelo 3D del ojo humano con un chatbot con IA para el estudio de su anatomía, fisiología y patologías. Incluye cuestionarios adaptativos y analíticas en tiempo real para que los profesores evalúen el progreso de los estudiantes.',
      icon: 'cards/visionary.png',
      link: '',
    },
    {
      id: 3,
      title: 'Ferplay App',
      description:
        'Ferplay es una aplicación móvil diseñada para conectar a gamers a través de la compraventa de videojuegos. Una plataforma intuitiva y ágil que permite a los usuarios publicar sus títulos, descubrir nuevas experiencias de juego y darle una segunda vida a su colección.',
      icon: 'cards/ferplay.png',
      link: '',
    },
  ];
}
