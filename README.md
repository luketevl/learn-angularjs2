# Learn Angular 2

# LINKS
- https://angular.io/


# PLUGINS
## DEV
- **TRANSPILER TYPESCRIPT**
```shell
npm install typescript --save-dev
```

# MODULES
- **CREATE** | Necessary import **DECORATOR**
  - **imports** _IMPORT_ **MODULES**
  - **declarations** _import_ **COMPONENTS**
  - **bootstrap** _import_ the **INITIAL** **COMPONENTS**
  - **exports** _export_ _enable_ what all use.
```javascript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  exports: [ AppComponent ]
})
export class ModuleName{

}
```



# COMPONENTS
- **CREATE** | Necessary import **DECORATOR**
  - **selector** create tagName <componentName></componentName>
  - **templateUrl**
  - **moduleId** _enable_ _RELATIVE PATH_ for tempalteUrl
```javascript
import { Component } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: './app/app.component.html',

})
export class ComponentName{}
```
- **ADDED PROPERTIES** | _import_ **input**
```javascript
import { Component, Input } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: './app/app.component.html',

})
export class ComponentName{
  @Input() attr1;
  @Input() attr2;
}
```
- **ONE WAY DATABIND** _Use_ **[]**=**propertie**
```javascript
import { Component, Input } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: './app/app.component.html',

})
export class ComponentName{
  @Input() attr1;
  @Input() attr2;
}
```
> Wrong

```html
<componentName [src]="{{att1}}" [alt]="{{attr2}}"></componentName>
```

> Correct

```html
<componentName [src]="att1" [alt]="attr2"></componentName>
<!-- OR-->
<componentName src="{{att1}}" alt="{{attr2}}"></componentName>
```
- **EVENT BIND** in **VIEW** to **MODEL** | Use **()**
```html
<input type="text" (keyup)="" />
```
- **CREATING LOCAL VARIABLE** | Use **#** varName OU **var-**varName**
```html
<input #localVariableName type="text" />
<input var-localVariableName type="text" />
```


# STEPS
- **Run** _transpiler_ watch
- **Create** the **COMPONENT MAIN**
- **Create** the **MODULE MAIN**
- **Create** file **main.ts**
    - **LOAD** the initial **MODULE**
```javascript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
```


# SERVICES ANGULAR CORE
- **HTTP** | call ajax requests
```javascript
// COMPONENT
import { Http } from '@angular/http';

// MODULE PROVIDER
import { HttpModule } from '@angular/http';

```
- **CREATE ROUTES**
  - **routes** | This is _array_
  - **RouterModule** | _Compile_ routes
  - **path** | Url part
  - **component** | _Component_ will load
  - **redirect** to specific **router**
> Import in object **imports** in **NgModule** _decorator_

```javascript
import { RouterModule, Routes} from '@angular/router';

// DEFINE ROUTES
const appRoutes: Routes = [
  { path: '', component: ComponentName},
  { path: 'register', component: ComponentName},
  // Equal 404 ROUTE
  { path: '**', component: ComponentName},
  // or
  { path: '**', redirectTo: 'routerPath'},
];

// GENERATE ROUTES
export const routing = RouterModule.forRoot(appRoutes);
```
> IMPORTANT: ADDED in **index.html** this code:

```html
<base href="/">
```


# DEPENDENCY INJECTION
- **Init**
```javascript
// COMPONENT
import { Inject } from '@angular/core';
```
- **DECORATOR**
```javascript
constructor(@Inject(Service) nameService){}
// OR
constructor(nameService : TypeService){}
```

# DIRECTIVES
- **NGFOR** | use _*_
```html
<photo *ngFor="let photo of photos" src="{{photo.att1}}" alt="{{photo.attr2}}" ></photo>
```
- **NG-CONTENT** | Added **child** value in component
```html
<panel>
  <child></child>
</panel>
```
- **router-outlet** | Added **component** **ROUTER** DEFINED
```html
<router-outlet></router-outlet>
```
- **routerLink** | Link pages, dont use _href_
```html
<a [routerLink] = "['/routerName']" >Link</a>
```

## FILTERS
- **UPPERCASE**
```html
<photo title="{{value | uppercase}}"></photo>
```
- **CREATING FILTERS**
  - **input.value** | GET element VALUE
```html
<photo *ngFor="let photo of photos | varName: filterInput.value" src="{{photo.att1}}" alt="{{photo.attr2}}" ></photo>
```

## PIPES
- **CREATING FILTERS** | added filters in **declarations** and **exports**
  - **name** | Name the your **filter**
  **transforma** | REQUIRED FUNCTION named **transform**
```javascript
import { Pipe } from '@angular/core';
@Pipe({
  name: 'filterName'
})
export class FilterName{
  transform(param1, param2){

  }
}
```




# RxJS
- Return **observable stream**
- Angular 2 dont use **promisses**
- **GET DATA**
  - **res** this is _RESPONSE_
    - **.json()** _format_
    - **.text()** _format_
```javascript
stream.subscribe(res => {
  console.log(res.json());
}, error => {})
```
- **ENABLE MAP** function
```javascript
import 'rxjs/add/operator/map';
```

# TRANSPILER
- **Transform** _typescript_ in **javascript**

# OBSERVATIONS
- In 21/02/17 **javascript** don't support to **DECORATOR**, but **typescript** have support
- **in DEVElOPMENT** is _required_ the **auto transpiler**
 - To **IMPORT** **ANGULAR2** use **systemjs**
  - **import** script in _html_
- **ATTENTION** for **EXPORT** ecma6 **classes**
- **DONT USE ;**

> ERROR

```javascript
@NgModule({
  declarations: [ PhotoComponent ],
  exports: [ PhotoComponent ]
});
```
> Correct

```javascript
@NgModule({
  declarations: [ PhotoComponent ],
  exports: [ PhotoComponent ]
})
```
- **DONT USE HREF in routes** use
```html
[routerLink]="['/routerName']"
```
- **ROUTES**
  - _Define_ the **router** for **last**
- **ONLY** **EVENTS ASYNC** **render** the **dom**
```html
<input type="text" (keyup)="" />
```
