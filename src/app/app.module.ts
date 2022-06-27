import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

// NgModule装饰器，用于注入一些元数据
// NgModule用来控制组件、指令、管道等的可见性，开发者可以利用NgModule把关系比较紧密的组件组织在一起
@NgModule({
  // 存放组件、指令、管道的声明
  declarations: [
    AppComponent
  ],
  // 引入依赖的模块
  imports: [
    CoreModule
  ],
  bootstrap: [AppComponent]
})

// AppModule是根模块
export class AppModule { }
