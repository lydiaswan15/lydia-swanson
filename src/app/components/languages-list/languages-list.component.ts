import { Component, OnInit } from '@angular/core';
import { Language } from './language.model';

@Component({
  selector: 'app-languages-list',
  templateUrl: './languages-list.component.html',
  styleUrls: ['./languages-list.component.scss']
})
export class LanguagesListComponent implements OnInit {

  languages: Language[] = [
    new Language(
      "JavaScript", 
      "I have spent several years working in JavaScript to create interactive websites. It is my preferred language.  ", 
      "../../../assets/files/icons8-javascript-logo-50.png", 
      "Check out JS projects", 
      "https://github.com/lydiaswan15"),
    new Language("HTML", 
    "I’ve created many websites using HTML and understand how to structure a website in an organized manner.  ", 
    "../../../assets/files/icons8-html-50.png", 
    "",
    ""),
    new Language("CSS/SCSS", 
    "What I love about working in the web is the chance to create sites that are functional and effective, as well as beautiful. I love working in CSS (my preferance is SCSS) to make each site beautiful.", 
    "../../../assets/files/icons8-css-50.png", 
    "Site built with only CSS", 
    "https://github.com/lydiaswan15/wdd331ZenGarden.github.io.git"),
    new Language("Angular", 
    "I have recently started learning Angular and am loving this framework! I’ve worked on a few projects in Angular and this site is built using Angular and Firebase. ",
    "../../../assets/files/icons8-angularjs-32.png", 
    "Code to this portfolio", 
    "https://github.com/lydiaswan15/lydia-swanson.git"),
    new Language("ASP.NET", 
    "I have built a couple of ASP.NET projects using C#. I found these projects incredibly exciting!",
    "", 
    "Contoso University", 
    "https://github.com/lydiaswan15/ContosoUniversity.git"),
    new Language("Other", 
    "There are many other languages and tools that I have worked with. These include: ASP.NET, SQL, C#, C++, Java, JSON, API, TypeScript, MongoDB and more.", 
    "",
    "Browse my GitHub",
    "https://github.com/lydiaswan15"),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
