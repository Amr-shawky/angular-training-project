import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUserCircle, faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-profile',
  imports: [FontAwesomeModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  faUserCircle = faUserCircle;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faMapMarkerAlt = faMapMarkerAlt;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faTwitter = faTwitter;

  userProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 890',
    location: 'New York, USA',
    bio: 'Passionate web developer with 5+ years of experience in building responsive and interactive user interfaces using Angular and modern web technologies.',
    skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Bootstrap'],
    socialMedia: {
      linkedin: '#',
      github: '#',
      twitter: '#'
    }
  };
}
