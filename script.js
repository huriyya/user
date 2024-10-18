let user = prompt('Istifadeci adini daxil edin')
let parol = prompt('parolunuzu daxil edin')
let netice = null;

switch (true) {
    case user == 'erlams' && parol == '123456':
        netice = 'Admin,Siz redakte ede bilersiniz '
        break;

    case user == 'aysel' && parol == '123456':
        netice = 'Aysel xos gelmisen '
        break;

    case user == 'cabir' && parol == '1234':
        netice = 'Cabir xos gelmisen '
        break;

    case user == 'huriyye' && parol == '200627':
        netice = 'Huriyye xos gelmisen '
        break;

    case user == 'togrul' && parol == '1345':
        netice = 'Togrul xos gelmisen '
        break;

    case user == 'mitri' && parol == '2456':
        netice = 'Mitri xos gelmisen '
        break;

    default:
        netice = 'porolunuz ve istifadeci adiniz yalnisdir'
        break;
}
document.getElementById('user').innerHTML = netice
