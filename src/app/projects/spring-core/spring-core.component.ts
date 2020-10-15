import { Component, OnInit } from '@angular/core';
import {docs, examples} from "./spring-core.variable";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-spring-core',
  templateUrl: './spring-core.component.html'
})
export class SpringCoreComponent implements OnInit {

  links = [
    {onclick: () => this.open('https://github.com/vladimirantin/spring-core'), name: 'GitHub', color: 'warning', icon: 'github'},
  ];
  examples = examples;
  docs = docs;
  dependency = `
    <dependency>
        <groupId>com.github.vladimirantin</groupId>
        <artifactId>spring-core</artifactId>
        <version>1.1</version>
        <scope>provided</scope>
    </dependency>`;
  path = `
    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.8.1</version>
                <configuration>
                    <source>1.8</source>
                    <target>1.8</target>
                    <annotationProcessorPaths>
                       <path>
                            <groupId>com.github.vladimirantin</groupId>
                            <artifactId>spring-core</artifactId>
                            <version>1.1</version>
                        </path>
                    </annotationProcessorPaths>
                </configuration>
            </plugin>
          </path>
        </plugins>
    </build>`;
  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit() {
  }

  private open(a: string) {
    window.open(a, '_blank');
  }

  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this._snackBar.open('Text copied', 'Ok' , {
      duration: 5000,
      verticalPosition: 'top'
    });
  }


}
