import { Component } from '@angular/core';

// Component用于声明一个组件
@Component({
  // CSS选择器
  selector: 'app-root',
  // 组件的模板文件
  templateUrl: './app.component.html',
  // 组件的样式文件
  styleUrls: ['./app.component.less']
})
// 导出组件
export class AppComponent {
  title = 'ng-wyy';
}
