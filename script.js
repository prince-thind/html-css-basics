const contentRoot = document.querySelector("#content");

function createText() {
  const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ipsa. Deleniti corporis velit delectus distinctio earum voluptatum ullam numquam dolorum necessitatibus fuga, recusandae iste vitae sit architecto obcaecati maxime saepe.`;
  const num = Math.trunc(Math.random() * 3 + 1);
  return lorem.repeat(num);
}
function createPara() {
  const para = document.createElement("p");
  para.classList.add("section-para");
  para.textContent = createText();
  return para;
}
function randomParas() {
  const random = Math.trunc(Math.random() * 4 + 1);
  const arr = [];
  for (let i = 0; i < random; i++) {
    const para = createPara();
    arr.push(para);
  }
  return arr;
}

function createListItem() {
  const item = document.createElement("li");
  item.textContent = createText();
  return item;
}
function randomListItems() {
  const random = Math.trunc(Math.random() * 3 + 1);
  const arr = [];
  for (let i = 0; i < random; i++) {
    const item = createListItem();
    arr.push(item);
  }
  return arr;
}

function createSection(sectionNum) {
  const section = document.createElement("section");
  section.classList.add('section');
  section.setAttribute('id',`topic-${sectionNum}`);

  const header = document.createElement("header");
  section.appendChild(header);

  const h3 = document.createElement("h3");
  h3.classList.add("section-heading");
  h3.textContent=`Topic ${sectionNum}`;
  header.appendChild(h3);

  const paras =randomParas();
  for (let para of paras) {
    section.appendChild(para);
  }

  const codeElement = document.createElement("code");
  codeElement.classList.add("section-code");
  codeElement.textContent = createText();
  section.appendChild(codeElement);

  const list = document.createElement("ol");
  list.classList.add("section-list");
  const listItems = randomListItems();
  for (let listItem of listItems) {
    list.appendChild(listItem);
  }
  section.appendChild(list);

  return section;
}

function main() {
  contentRoot.innerHTML = "";
  for (let i = 1; i <= 15; i++) {
    const section = createSection(i);
    contentRoot.appendChild(section);
  }
}
main();
