import { Component } from '@angular/core';
import { IHighlight } from 'src/app/interface/highlight';
import { HighlightService } from 'src/app/services/highlight.service';
@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.css']
})
export class HighlightComponent {
  highlights!: IHighlight[];
  constructor(private HighlightService:HighlightService){
    this.HighlightService.getHighlights().subscribe(data => {
      this.highlights = Array.from(data); 
      console.log(this.highlights);
    });
  }
}
