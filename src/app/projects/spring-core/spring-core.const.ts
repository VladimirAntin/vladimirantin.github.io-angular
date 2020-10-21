export function dependency(version: string) {
  return `
    <dependency>
        <groupId>com.github.vladimirantin</groupId>
        <artifactId>spring-core</artifactId>
        <version>${version}</version>
        <scope>provided</scope>
    </dependency>`;

}
export function path(version: string){
  return `
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
                            <version>${version}</version>
                        </path>
                    </annotationProcessorPaths>
                </configuration>
            </plugin>
          </path>
        </plugins>
    </build>`;
}


export function b(s: string) {
  return `<b class="font-12">${s}</b>`;
};
