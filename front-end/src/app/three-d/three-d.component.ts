import { Component, ElementRef, OnInit } from '@angular/core';

import { Stage } from '@dolan-bio/3d-scene';

@Component({
  selector: 'app-three-d',
  templateUrl: './three-d.component.html',
  styleUrls: ['./three-d.component.scss'],
})
export class ThreeDComponent implements OnInit {
  private stage: Stage;

  constructor(private el: ElementRef) {
    this.stage = new Stage();
  }

  public ngOnInit(): void {
    this.stage.run(this.el.nativeElement);
    this.stage.setSize(document.body.clientWidth, window.innerHeight);

    window.addEventListener(
      'mousemove',
      (e) => {
        const convertedTop = this.tiltCalculator(e.screenY);
        this.stage.tilt(convertedTop);
      },
      false,
    );
  }

  private tiltCalculator(screenPosY: number): number {
    const scaledY = screenPosY / 170;
    return 10 * scaledY;
  }
}
