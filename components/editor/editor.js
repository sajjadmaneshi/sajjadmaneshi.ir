const codeElement = document.querySelector(".code code");

let code =
  "\n" +
  "export class MyInfo {\n" +
  "    birthday:string='11 june 1995';\n" +
  "    city:string='Shiraz, Iran';\n" +
  "    age:number=28;\n" +
  "    phone:string='+98 939 424 1607';\n" +
  "    email:string=maneshisajjad@gmail.com;\n" +
  "}\n";

export const typingInterval = () => {
  for (let i = 0; i < code.length; i++) {
    setTimeout(() => {
      codeElement.innerHTML += code[i];
      Prism.highlightAll(codeElement);
    }, i * 50);
  }
};
