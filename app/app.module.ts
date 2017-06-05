// NgModule imports general Module code from the Angular framework's core.
import { NgModule }       from '@angular/core';
// BrowserModule imports code necessary to run our app in the browser, including built-in directives that allow us to add things like conditionals and loops to our components. We'll explore these soon.
import { BrowserModule }  from '@angular/platform-browser';
// AppComponent actually refers to the root component we created! We call it AppComponent because that's the name of the class declaration exported at the bottom of its file.
import { AppComponent }   from './app.component';


@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
