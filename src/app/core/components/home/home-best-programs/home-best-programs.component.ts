import { Component, OnInit } from '@angular/core';
import { Program } from 'src/app/shared/models/program';

@Component({
  selector: 'app-home-best-programs',
  templateUrl: './home-best-programs.component.html',
  styleUrls: ['./home-best-programs.component.scss']
})
export class HomeBestProgramsComponent implements OnInit {

  programs : Program[] = [] ;

  responsiveOptions  = [
    {
      breakpoint: '1178px',
      numVisible: 3,
      numScroll: 1
  },
  {
      breakpoint: '914px',
      numVisible: 2,
      numScroll: 1
  },
  {
      breakpoint: '675px',
      numVisible: 1,
      numScroll: 1
  }
];

  constructor() {
    
   }

  ngOnInit(): void {
    this.initBestProgramData();
  }

  initBestProgramData(){
    this.programs = [
      {
        image:"../../../../../assets/img/home/live-tv-image.webp",
        name:"Bulletin d'information"
      },
      {
        image:"../../../../../assets/img/home/live-radio-image.png",
        name:"Flash info"
      },
      {
        image:"../../../../../assets/img/home/live-tv-image.png",
        name:"Bulletin d'information"
      },
      {
        image:"../../../../../assets/img/home/live-radio-image.png",
        name:"Bulletin d'information"
      },
      {
        image:"../../../../../assets/img/home/live-radio-image.png",
        name:"Bulletin d'information"
      },
      {
        image:"../../../../../assets/img/home/live-radio-image.png",
        name:"Bulletin d'information"
      },

      {
        image:"../../../../../assets/img/home/live-radio-image.png",
        name:"Bulletin d'information"
      },
      {
        image:"../../../../../assets/img/home/live-radio-image.png",
        name:"Bulletin d'information"
      },
      {
        image:"../../../../../assets/img/home/live-radio-image.png",
        name:"Bulletin d'information"
      }
    ]
  }

}
