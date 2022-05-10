import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // Detalhes dos pratos

  foodDetails = [
    {
      id:1,
      foodName: "Sanduiche Grelhado Panneer",
      foodDetails:"Carne fritada com o Queija Indiano Masala Panner, que é um tipo queijo fresco especial clássico na culinária indiana",
      foodPrice:" R$ 20",
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },

    {
      id:2,
      foodName: "Veggie Supremo",
      foodDetails:"Cebola | Capsicum verde | Cogumelo| Oliveiras preta, milho doce, Paprika Vermelha acompanhado com queijo ",
      foodPrice:" R$ 20",
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k"
    },

    {
      id:3,
      foodName: "Panner Burguer",
      foodDetails:"Panner",
      foodPrice:" R$ 100",
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k"
    },

    {
      id:4,
      foodName: "Veg Masala com Naan",
      foodDetails:"Um prato caseiro misturado com batata e legumes, temperado com especiarias indianas. Uma sensação que vai fazer você voltar pra cozinha da sua mãe.",
      foodPrice:" R$ 25",
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/l2ng6gtge30sqaafqng7",
    },

    {
      id:5,
      foodName: "Brownie Indulgente",
      foodDetails:"(Sem ovos)Delicie-se com um browine de chocolate ricamente decadente feito com amor e coberto de chocolate agridoce que proporciona uma experiência de chocolate ultra-rica",
      foodPrice:" R$ 15",
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
    },

    {
      id:6,
      foodName: "Sorvete de Bolo de Queijo Oreo",
      foodDetails:"Sorvete de Oreo",
      foodPrice:" R$ 20",
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    },
  ]
}
