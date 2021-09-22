function create_tr(table_id) {
    let table_body = document.getElementById(table_id),
        first_tr   = table_body.firstElementChild
        tr_clone   = first_tr.cloneNode(true);

    table_body.append(tr_clone);

    clean_first_tr(table_body.firstElementChild);
}

function clean_first_tr(firstTr) {
    let children = firstTr.children;
    
    children = Array.isArray(children) ? children : Object.values(children);
    children.forEach(x=>{
        if(x !== firstTr.lastElementChild)
        {
            x.firstElementChild.value = '';
        }
    });
}

function remove_tr(This) {
    if(This.closest('tbody').childElementCount == 1)
    {
        alert("You Don't have Permission to Delete This ?");
    }else{
        This.closest('tr').remove();
    }
}

const pass = document.querySelector('#pass');
const cfPass = document.querySelector('cf-pass');
const pAlert = document.querySelector('form p');
const btnRegister= document.querySelector('button');
const btnShow = document.querySelectorAll('label i');

function check(){
    let check = (pass.value.length<6);
    console.log(check);
    btnRegister.disabled = check
    cfPass.disabled = check;
    cfPass.value='';
    pAlert.className='alert';
}
check();

pass.addEventListener('keyup',check);

btnRegister.addEventListener('click', (e)=>{
    e.preventDefault();
    let txtErr="Error! Passwords dont match!";
    let txtSuccess="Passwords matched";
    let result = (pass.value===cfPass.value);
    console.log(result);
    pAlert.textContent= result ? txtSuccess: txtErr;
    pAlert.className = result ? 'alert success' : 'alert danger';
});
btnShow.forEach(item =>{
    let show = false;
    item.addEventListener('click',()=>{
        show = !show;
        item.parentElement.children[0].setAttribute(
            'type',
            show ? 'text' : 'password'
            );
            item.parentElement.children[1].setAttribute(
                'class',
                show ? 'fa fa-eye-slash' : 'fa fa-eye'
                );
    });
})

function checkPassword(){
    let password = document.getElementById("password").value;
    let cnfrmPassword = document.getElementById("cnfrm-password").value;
    console.log(" Password:", password,'\n',"Confirm Password:",cnfrmPassword);
    let message = document.getElementById("message");

    if(password.length != 0){
        if(password == cnfrmPassword){
            message.textContent = "Passwords match";
            message.style.backgroundColor = "#1dcd59";
            window.location.href="./success.html";
        }
        else{
            message.textContent = "Password don't match";
            message.style.backgroundColor = "#ff4d4d";
        }
    }
    else{
        alert("Password can't be empty!");
        message.textContent = "";
    }
}