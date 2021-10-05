$(document).ready(function() {
    //$(sel).on("submit", function() {}) 제출하다.
    // 선택자는 항상 form!
    // submit되면 항상 refresh됨.

    //Local Storage : 사용자가 지우기 전까지 유지
    // .setItem(); .getItem(); .removeItem()

    //Session Storage : 브라우저 닫으면 끝!
    //Cookies : 만료기한이 정해진 데이터

    function setUser() {
        var _name = localStorage.getItem("user");
        if(_name !== null){//데이터가 있다면
            $(".userInfo").hide();
            $(".welcome").show();
            $(".welcome .user-name").text(_name);
        } else { //비어있지 경우. 
            $(".userInfo").show();
            $(".welcome").hide();
        }
    };
    setUser();
    

    $("#userName").on("submit", function(e) {
        e.preventDefault(); // 새로고침 막기

        var userName = $(this).find("input").val();//value를 가져오는 메서드
        localStorage.setItem("user",userName);//로컬스토리지에 key와 value 저장
        setUser(); // 함수 실행
    });

    $(".edit button").on("click", function() {
        $("span.user-name").hide();
        $("#userEdit").css("display","inline-block");
        $("#userEdit input").val($(".user-name").text()).focus().select();
        // .focus()<-> .blur()
    });

    $("#userEdit").on("submit", function() {
        var editedName = $(this).find("input").val();
        localStorage.setItem("user",editedName);
    });

    /*todolist */
    const userlist = function(keyword) {
        return `
            <li>
                <input type="checkbox">
                <p class="keyword">${keyword}</p>
                <p class="del"><span></span><span></    span></p>
            </li>
        `;
    }; // 키워드를 반영한 구조를 반환하는 함수

    var todoList = localStorage.getItem("usertodo") || new Array();
    var todoStat = localStorage.getItem("listStat") || new Array();

    function setList(){
        todoList = localStorage.getItem("usertodo");
        todoList = todoList.split(",");

        $(".list").children().remove();
        for(i in todoList){
            var l = userlist(todoList[i]);
            // 구조생성
            $(".list").append(l); // 구조추가
        }
    };

    function setStatus() {
        todoStat = localStorage.getItem("listStat");
        todoStat = todoStat.split(",");

        for(i in todoStat) {
            var status = (function () {
                if(todoStat[i] === "true") {
                    return true;
                } else if (todoStat[i] === "false") {
                    return false;
                }
            }()); // 타입 변환
            if(status) { //true = 1
                $(`.list li:eq(${i}) input[type="checkbox"]`).prop("checked", true); // prop() = property
            } else { //false(default) = 0
                $(`.list li:eq(${i}) input[type="checkbox"]`).prop("checked", false);
            }
        }
    }; // 리스트 상태 불러와서 요소에 반영

    if(todoList.length){
        setList();
    }

    if (todoStat.length) { // 0이면 false, 0이 아니면 true
        setStatus(); // 함수 실행
    }
    
    $("#userTodo").on("submit", function(e) {
        e.preventDefault();
        var todo = $(this).find("input").val();
        todoList.push(todo);
        localStorage.setItem("usertodo", todoList)
        setList();        

        todoStat.push(false);
        localStorage.setItem("listStat", todoStat);
        setStatus();
    });

    $('.list input[type="checkbox"]').on("change", function() {
        var idx = $(this).parent("li").index();
        var currentStat = todoStat[idx];
        console.log(idx, currentStat);
        currentStat = (function () {
            if(todoStat[idx] === "true") {
                return true;
            } else if (todoStat[idx] === "false") {
                return false;
            }
        }()); // 즉시 실행 함수, 타입 변환, 0 아니면 1이 나옴(true, false)
        todoStat[idx] = !currentStat; // 순서에 맞는 배열을 바꿈
        localStorage.setItem("listStat", todoStat); // 업데이트

        setStatus(); // 업데이트 된 상태를 반영
    });

    /*
        Delete(리스트 삭제) 구현 방법
        1. index 구하기
        2. 요소 삭제하기 (remove() 메서드 사용)
        3. 배열 가져오기 (todolist, todostatus)
        4. array.splice(index, 1) ~~~> index 순서의 배열부터 1개 삭제
    */

});