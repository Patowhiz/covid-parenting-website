import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-impact-champions',
  templateUrl: './impact-champions.component.html',
  styleUrls: ['./impact-champions.component.scss']
})
export class ImpactChampionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onClickShowMoreText(event: any){
       
    let parentNode: any = event.target.parentNode;
    let moreEllipsisNode: any = parentNode.querySelector('.more-ellipsis'); 
    let previewTextNode: any = parentNode.querySelector('.preview-text');
    let moreLinkNode: any = parentNode.querySelector('.more-link');  

    if(moreLinkNode.innerHTML == "show less"){
      moreEllipsisNode.style.display = "block";
      previewTextNode.style.height = "100px";
      moreLinkNode.innerHTML = "show more";   
    }else{
      moreEllipsisNode.style.display = "none";
      previewTextNode.style.height = "auto";
      moreLinkNode.innerHTML = "show less";
    }
    
  }//end method

}
