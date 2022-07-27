import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tela',
  templateUrl: './tela.component.html',
  styleUrls: ['./tela.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TelaComponent implements OnInit {

  constructor(
    private title: Title
  ) { }

  @Input() tela: string = ''
  
  ngOnInit(): void {
    this.title.setTitle(this.tela)
  }

}
