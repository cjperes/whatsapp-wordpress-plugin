# whatsapp-wordpress-plugin


Primeiro insira a pasta 'whatsplug" em wp-content/themes/nome-do-tema/assets/ , depois edite o header.php:

Insira o código abaixo dentro do head:

<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/whatsplug/whatsplug.css">
<script src="<?php bloginfo('template_url'); ?>/whatsplug/whatsplug.js"></script>

E o código abaixo dentro do body, editando o número depois do 55 (código brasileiro):

```html
<a target="_blank" class="whatsapp-plug-icon" href="https://api.whatsapp.com/send?phone=55xxxxxxxxx&text=Ola!"></a>
``` 


--------------------------------------------------------------------------------------------------------------------------------

Primeiro insira a pasta 'whatsplug" em public_html/ , depois edite o index.php / footer.php (ou home page):

Insira o código abaixo dentro do head:

<link rel="stylesheet" href="assets/whatsplug/whatsplug.css">
<script src="assets/whatsplug/whatsplug.js"></script>

E o código abaixo dentro do body, editando o número depois do 55 (código brasileiro):


```html
<a target="_blank" class="whatsapp-plug-icon" href="https://api.whatsapp.com/send?phone=55xxxxxxxxx&text=Ola!"></a>
``` 
