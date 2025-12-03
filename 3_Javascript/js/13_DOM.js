// Node 확인하기
document.querySelector("#btn1").addEventListener("click", () => {

    const ul = document.querySelector("#test");

    // ul의 모든 자식 노드 얻어오기
    // 요소.childNodes -> 배열 형태로 가져옴
    const list = ul.childNodes;
    console.log(list);

    // 자식 node 는 개행과 공백 포함
    // text(개행/공백), comment(주석), 태그(요소) 모두 Node 로써 취급됨

    // 자식 node 중 첫번째(위 경우에서 4번째) li 요소를 얻어오고 싶다면
    console.log(list[3]);

        // 1. 부모 노드 찾는 방법
        // 요소.parentNode
        // #li1 부모 노드 찾아서 배경색 변화
        list[3].parentNode.style.backgroundColor = "skyblue";

        // 2. 첫번째 자식 노드 찾기 
        // 요소.firstChild
        // ul 첫번째 자식 노드 찾기
        console.log(ul.firstChild);

        // 3. 마지막 자식 노드 찾기
        // 요소.lastChild
        console.log(ul.lastChild);

        // 4. 원하는 위치(index)에 존재하는 자식 노드 찾기
        // 요소.childNodes[index]
        // ul 자식 노드 중 3번째 li 태그 찾아 배경색 pink
        ul.childNodes[9].style.backgroundColor = "pink";

        //5. 이전/다음 형제 노드 찾기
        // 이전 : 요소.previousSibling
        // 다음 : 요소.nextSibling
        // 탐색용 코드는 연달아서 작성이 가능하다.
        ul.childNodes[9].nextSibling.nextSibling.style.color = "red";
        console.log(ul.lastChild.previousSibling);

// ------------------------------------------

        // 1. 마지막 자식 노드 추가
        // 요소.appendChild(노드)
        // list[11]의 '마지막' 자식으로 "zzz"라는 TextNode 추가
        list[11].appendChild(document.createTextNode("zzz"));

        // 2. 마지막 자식으로 추가 
        // 요소.append("내용" or 노드)
        list[11].append("12345", "abcd", "가나다라");
        // appendChild / appen 둘 다 DOM 요소 내부에 자식 노드 추가하는 함수
        // - appendChild : 노드만 추가 가능(createTextNode() 필수 작성), 한번에 1개만 추가 가능
        // - append : 노드 + 문자열 모두 가능 / 한번에 여러개 추가 가능

        // 3. 첫번째 자식으로 추가 
        // 요소.prepend("내용" 또는 노드)
        list[11].prepend("오늘","저녁","고기");

        // 4. 이전 / 다음 형제로 추가
        // 이전 : 요소.before("내용" or 노드)
        // 다음 : 요소.after("내용" or 노드)

        ul.before("이전입니다","ㅎㅎ");
        ul.after("이후입니다","ㅋㅋ");

    }); 

//----------------------------------------------------------------------------

// Node 와 Element 차이

document.querySelector("#btn2").addEventListener("click", () => {

    const ul = document.querySelector("#test2");

    // ul의 모든 자식 요소(Element) 얻어오기 (Children)
    console.log(ul.children);

    // ul의 첫번째 자식 요소
    console.log(ul.firstElementChild);

    // ul의 마지막 자식 요소
    console.log(ul.lastElementChild);
    
    // ul의 부모 요소
    console.log(ul.parentElement);
    
    // ul의 이전형제 요소
    console.log(ul.previousElementSibling);
    
    // ul의 다음형제 요소
    console.log(ul.nextElementSibling);

});

