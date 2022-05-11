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
      "imgURL"),
    new Language("HTML", 
    "I’ve created many websites using HTML and understand how to structure a website in an organized manner.  ", 
    "imgURL"),
    new Language("CSS/SCSS", 
    "What I love about working in the web is the chance to create sites that are functional and effective, as well as beautiful. I love working in CSS (my preferance is SCSS) to make each site beautiful.", 
    "imgURL"),
    new Language("Angular", 
    "I have recently started learning Angular and am loving this framework! I’ve worked on a few project in Angular and this site is built using Angular and Firebase. ",
    "imgURL"),
    new Language("ASP.NET", "I have built a couple of ASP.NET projects using C#. I found these projects incredibly exciting!", ""),
    new Language("Other", 
    "There are many other languages and tools that I have worked with. These include: ASP.NET, SQL, C#, C++, Java, JSON, API, TypeScript, MongoDB and more.", 
    "imgURL"),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
