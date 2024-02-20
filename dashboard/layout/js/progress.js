ClassicEditor
.create( document.querySelector( '#editor' ) )
.catch(  );

const ck = document.getElementsByClassName('ck-content')[0].innerHTML;
document.getElementsByName('content')[0].value = ck

console.log('test')