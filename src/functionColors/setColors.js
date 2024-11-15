export const setColor = (type) => {
    switch (type) {
        case 'normal':
            return 'radial-gradient(circle, rgb(115, 82, 89), rgb(186, 112, 127))';
        case 'fighting':
            return 'radial-gradient(circle, rgb(150, 64, 42), rgb(233, 91, 54))';
        case 'flying':
            return 'radial-gradient(circle, rgb(150, 64, 42), rgb(233, 91, 54))';
        case 'poison':
            return 'radial-gradient(circle, rgb(91, 49, 132), rgb(196, 142, 249))';
        case 'ground':
            return 'radial-gradient(circle, rgb(101, 64, 8), rgb(156, 102, 20))';
        case 'rock':
            return 'radial-gradient(circle, rgb(126, 126, 126), rgb(185, 185, 186))';
        case 'bug':
            return 'radial-gradient(circle, rgb(74, 182, 72), rgb(195, 222, 163))';
        case 'ghost':
            return 'radial-gradient(circle, rgb(50, 53, 105), rgb(90, 97, 221))';
        case 'steel':   
            return 'radial-gradient(circle, rgb(94, 115, 108), rgb(155, 183, 173))';
        case 'fire':
            return 'radial-gradient(circle, rgb(230, 144, 30), rgb(231, 92, 53))';
        case 'water':
            return 'radial-gradient(circle, rgb(131, 185, 255), rgb(20, 121, 251))';
        case 'grass':
            return 'radial-gradient(circle, rgb(177, 219, 188), rgb(195, 222, 163))';
        case 'electric':
            return 'radial-gradient(circle, rgba(255,245,208,1) 0%, rgba(246,189,32,1) 100%)';
        case 'psychic':
            return 'radial-gradient(circle, rgb(12, 19, 149), rgb(142, 148, 254))';
        case 'dragon':
            return 'radial-gradient(circle, rgb(71, 138, 147), rgb(141, 214, 224))';
        case 'dark':
            return 'radial-gradient(circle, rgb(11, 14, 13), rgb(79, 79, 79))';
        case 'fairy':
            return 'radial-gradient(circle, rgb(151, 27, 69), rgb(197, 89, 126))';
        case 'ice':
            return 'radial-gradient(circle, rgb(111, 190, 223), rgb(196, 235, 251))';
        case 'shadow':
            break;
        case 'unknown':
            break;
        default:
            break;
    }
}
