let dis = 'd';
console.log(dis.charCodeAt());
console.log(String.fromCharCode(65, 122));
let text ='string';
console.log(text.charCodeAt()+4);


// Write class below
class ShiftCipher{
  constructor (valueX){
    this.valueX = valueX;
  }
 
encrypt(string){
    let text = string.toLowerCase();
    let cart=[];
    for(let i=0; i<=text.length; i++){ 
      if (text.charCodeAt(i)>=97 && text.charCodeAt(i)<=122){
        let calc = text.charCodeAt(i)+this.valueX;
        if (calc > 122){
          calc = calc - 122 + 96;
        }
        cart.push(calc);
      }else if( text.charCodeAt(i) < 65 || text.charCodeAt(i) > 122 ){
        cart.push(text.charCodeAt(i));
      }else{
      }
    }console.log(cart);
  console.log(String.fromCharCode.apply(this, cart).toUpperCase());

  }
  decrypt(string){
    let text = string.toUpperCase();
    let cart=[];
    for(let i=0; i<=text.length; i++){ 
      if (text.charCodeAt(i)>=65 && text.charCodeAt(i)<=90){
        let calc = text.charCodeAt(i)-this.valueX;
        if (calc < 65){
          calc = 91 - (65 - calc);
        }
        
        cart.push(calc);
      }else if( text.charCodeAt(i) < 65 || text.charCodeAt(i) > 122 ){
        cart.push(text.charCodeAt(i));
      }else{
      }
    }console.log(cart);
  console.log(String.fromCharCode.apply(this, cart).toLowerCase());

  }
}
const cipher = new ShiftCipher(3);
cipher.encrypt('Z');
cipher.decrypt('ABCDEFG');



