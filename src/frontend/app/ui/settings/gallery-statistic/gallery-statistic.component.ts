import {Component} from '@angular/core';
import {SettingsService} from '../settings.service';
import { NgIconComponent } from '@ng-icons/core';
import { FileSizePipe } from '../../../pipes/FileSizePipe';

@Component({
    selector: 'app-settings-gallery-statistic',
    templateUrl: './gallery-statistic.component.html',
    styleUrls: ['./gallery-statistic.component.css'],
    standalone: true,
    imports: [NgIconComponent, FileSizePipe]
})
export class GalleryStatisticComponent {

  constructor(public settingsService: SettingsService) {
  }

}
