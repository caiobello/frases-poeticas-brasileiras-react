import React, { useState } from 'react';
import './style.css';

const PoetQuoteGenerator = () => {
  const quotes = [
    {
        text: 'A beleza da vida reside nos detalhes que muitas vezes negligenciamos.',
        author: 'Isabella Ferreira'
      },
      {
        text: 'O amor é a luz que ilumina nossos corações nas noites mais escuras.',
        author: 'Lucas Oliveira'
      },
      {
        text: 'A arte é uma necessidade para enriquecer a alma',
        author: 'Caio Bello'
      },
      {
        text: 'No jardim da alma, as flores da esperança florescem eternamente.',
        author: 'Julia Ribeiro'
      },
      {
        text: 'A solidão é a tela em branco onde a mente pinta seus pensamentos mais profundos.',
        author: 'Mateus Alves'
      },
      {
        text: 'Assim como o rio flui suavemente, o tempo passa sem esperar por ninguém.',
        author: 'Laura Costa'
      },
      {
        text: 'A natureza é a poesia silenciosa que dança ao nosso redor.',
        author: 'Carlos Silva'
      },
      {
        text: 'A noite estrelada é um manto de sonhos que cobre a escuridão da noite.',
        author: 'Ana Souza'
      },
      {
        text: 'Nas asas da imaginação, voamos para mundos desconhecidos.',
        author: 'Pedro Santos'
      },
      {
        text: 'Os sentimentos são como folhas ao vento, voam com a brisa da emoção.',
        author: 'Mariana Carvalho'
      },
      {
        text: 'A música é a linguagem da alma, capaz de expressar o que as palavras não podem.',
        author: 'João Pereira'
      },
      {
        text: 'A luz da aurora é como um abraço suave da manhã.',
        author: 'Clara Fernandes'
      },
      {
        text: 'O silêncio é a paleta em branco do pensamento, onde a criatividade pinta suas obras-primas.',
        author: 'Gustavo Barbosa'
      },
      {
        text: 'O amor é o fogo que aquece nossos corações e ilumina nossas almas.',
        author: 'Larissa Santos'
      },
      {
        text: 'Na dança das estrelas, encontramos o ritmo do universo.',
        author: 'Felipe Almeida'
      },
      {
        text: 'O poeta é um artesão das palavras, esculpindo versos que tocam a alma.',
        author: 'Sofia Oliveira'
      },
      // Adicione mais frases poéticas aqui...
      {
        text: 'Nas entrelinhas da vida, encontramos os segredos do coração.',
        author: 'Maria Rodrigues'
      },
      {
        text: 'Cada pôr do sol é um adeus dourado ao dia que se despede.',
        author: 'Pedro Duarte'
      },
      {
        text: 'As estrelas no céu noturno são os desejos que ousamos sonhar.',
        author: 'Luciana Pereira'
      },
      {
        text: 'A brisa suave da manhã sussurra segredos de esperança no ouvido da terra.',
        author: 'Rodrigo Oliveira'
      },
      {
        text: 'No silêncio da noite, os sonhos dançam ao som da lua.',
        author: 'Camila Santos'
      },
      {
        text: 'As palavras são as notas da canção que o coração canta.',
        author: 'Rafael Fernandes'
      },
      {
        text: 'O amor é a força que move montanhas e acende estrelas.',
        author: 'Luisa Almeida'
      },
      {
        text: 'O tempo é o tecelão do destino, entrelaçando passado, presente e futuro.',
        author: 'Antonio Rodrigues'
      },
      {
        text: 'A saudade é a melodia triste que toca no coração quando a pessoa amada se vai.',
        author: 'Beatriz Silva'
      },
      {
        text: 'A vida é um livro em branco, e a cada dia escrevemos uma nova página.',
        author: 'Marcos Duarte'
      },
      {
        text: 'O sorriso de uma criança é a poesia mais pura e genuína.',
        author: 'Vitória Pereira'
      },
      {
        text: 'A chuva é a lágrima do céu, lavando a alma da terra.',
        author: 'Henrique Alves'
      },
      {
        text: 'No abraço do oceano, encontramos a vastidão de nossos sonhos.',
        author: 'Clara Rodrigues'
      },
      {
        text: 'A liberdade é o vento que agita as asas da alma.',
        author: 'Leonardo Costa'
      },
      {
        text: 'A natureza é o livro que nunca termina, e cada página é uma nova descoberta.',
        author: 'Sophia Oliveira'
      },
      {
        text: 'O amor é o poema que o coração escreve, com versos de carinho e paixão.',
        author: 'Gabriela Souza'
      },
      {
        text: 'Na dança das folhas no outono, encontramos a beleza na despedida.',
        author: 'André Santos'
      },
      {
        text: 'A vida é a canção que entoamos com nossas escolhas e ações.',
        author: 'Eduardo Almeida'
      },
      {
        text: 'No jardim da gratidão, as flores mais belas florescem.',
        author: 'Lara Rodrigues'
      },
      {
        text: 'O sol nasce a cada manhã como um presente da natureza.',
        author: 'Giovanna Costa'
      },
      {
        text: 'A amizade é o tesouro que encontramos nos corações dos amigos verdadeiros.',
        author: 'Matheus Silva'
      },
      {
        text: 'A esperança é a estrela-guia que ilumina nosso caminho nas noites mais escuras.',
        author: 'Isabela Ribeiro'
      },
      {
        text: 'As palavras são as pinceladas da alma, pintando quadros de emoção.',
        author: 'Bruno Duarte'
      },
      {
        text: 'O amor é o elo que une os corações e transcende as barreiras do tempo.',
        author: 'Alice Ferreira'
      },
      {
        text: 'Nas asas da imaginação, viajamos para mundos de infinitas possibilidades.',
        author: 'Rafaela Santos'
      },
      {
        text: 'A lua é a testemunha silenciosa dos segredos da noite.',
        author: 'Paulo Alves'
      },
      {
        text: 'A melodia da chuva é a canção da terra que dança sob o céu cinzento.',
        author: 'Cláudia Duarte'
      },
      {
        text: 'O vento sussurra segredos de liberdade nas folhas das árvores.',
        author: 'Miguel Oliveira'
      },
      {
        text: 'O sol se põe, mas deixa um rastro de cores no céu como despedida.',
        author: 'Manuela Rodrigues'
      },
      {
        text: 'A vida é como um livro, e cada dia é uma nova página em branco.',
        author: 'Diego Almeida'
      },
      {
        text: 'A arte é a expressão da alma, pintando a tela da vida com cores e emoções.',
        author: 'Bianca Silva'
      },
      {
        text: 'A noite é um véu de mistério que esconde os sonhos mais profundos.',
        author: 'Roberto Santos'
      },
      {
        text: 'Nas estrelas, encontramos a esperança que brilha mesmo na escuridão.',
        author: 'Isabela Oliveira'
      },
      {
        text: 'As montanhas são testemunhas silenciosas do tempo que passa.',
        author: 'Henrique Ribeiro'
      },
      {
        text: 'Os suspiros do vento são segredos que o universo sussurra aos ouvidos da terra.',
        author: 'Maria Duarte'
      },
      {
        text: 'A vida é como um espelho, refletindo o que somos e o que desejamos ser.',
        author: 'Giovanni Silva'
      },
      {
        text: 'O amor é a poesia que flui do coração e preenche o mundo com beleza.',
        author: 'Vitória Costa'
      },
      {
        text: 'Nas asas da liberdade, voamos para horizontes sem limites.',
        author: 'Carlos Oliveira'
      },
      {
        text: 'A amizade é o tesouro que encontramos nas jornadas da vida.',
        author: 'Larissa Almeida'
      },
      {
        text: 'No silêncio da noite, os sonhos florescem como estrelas no céu da imaginação.',
        author: 'Felipe Ribeiro'
      },
      {
        text: 'As palavras são as notas que compõem a sinfonia da vida.',
        author: 'Mariana Costa'
      },
      {
        text: 'O tempo é a canção que toca no coração da eternidade.',
        author: 'Antônio Silva'
      },
      {
        text: 'A solidão é a melodia da introspecção, onde encontramos nossa verdade interior.',
        author: 'Clara Oliveira'
      },
      {
        text: 'A esperança é a semente que plantamos no solo do coração, esperando a colheita da alegria.',
        author: 'Pedro Alves'
      },
      {
        text: 'A natureza é a obra de arte mais grandiosa, e nós somos os espectadores privilegiados.',
        author: 'Luiza Rodrigues'
      },
      {
        text: 'O amor é a luz que guia nossos passos no labirinto da vida.',
        author: 'Gabriel Santos'
      },
      {
        text: 'Nas páginas da vida, escrevemos nossa história com a tinta das experiências.',
        author: 'Camila Costa'
      },
      {
        text: 'O sol se põe, mas deixa um rastro de cores no céu como lembrança de sua passagem.',
        author: 'André Oliveira'
      },
      {
        text: 'A lua é a amiga silenciosa das noites solitárias.',
        author: 'Juliana Almeida'
      },
      {
        text: 'A música é a linguagem universal que une os corações de todos os povos.',
        author: 'Gustavo Ribeiro'
      },
      {
        text: 'A solidão é a tela em branco onde a mente pinta seus pensamentos mais profundos.',
        author: 'Ana Souza'
      },
      {
        text: 'A saudade é a poesia que o tempo escreve na alma.',
        author: 'Pedro Santos'
      },
      {
        text: 'As palavras são como folhas de outono, caem das árvores do meu pensamento.',
        author: 'Mariana Oliveira'
      },
      {
        text: 'A vida é uma jornada de descobertas, e cada passo é uma aventura.',
        author: 'Lucas Alves'
      },
      {
        text: 'A liberdade é o vento que agita as asas da alma.',
        author: 'Joana Silva'
      },
      {
        text: 'Nas entrelinhas da vida, encontramos os segredos do coração.',
        author: 'Rodrigo Almeida'
      },
      {
        text: 'No jardim da gratidão, as flores mais belas florescem.',
        author: 'Clara Costa'
      },
      {
        text: 'A vida é como um poema, e cada dia é um verso que escrevemos.',
        author: 'Matheus Ribeiro'
      },
      {
        text: 'Nas asas da imaginação, voamos para mundos de infinitas possibilidades.',
        author: 'Isabela Santos'
      },
      {
        text: 'A noite é um manto de estrelas que cobre o mundo com seu brilho.',
        author: 'Luiz Oliveira'
      },
      {
        text: 'O amor é a canção que o coração canta em todos os momentos da vida.',
        author: 'Eduarda Rodrigues'
      },
      {
        text: 'A natureza é a obra de arte mais grandiosa, e nós somos os seus admiradores.',
        author: 'Luciano Costa'
      },
      {
        text: 'O silêncio é o eco da alma, onde os pensamentos ressoam como melodias.',
        author: 'Mariana Almeida'
      },
      {
        text: 'A esperança é a luz que brilha no fim do túnel, mesmo nas noites mais escuras.',
        author: 'Vitória Ribeiro'
      },
      {
        text: 'A amizade é o tesouro que encontramos nas viagens da vida.',
        author: 'Felipe Oliveira'
      },
      {
        text: 'Nas entrelinhas da vida, encontramos os segredos do coração.',
        author: 'Sofia Alves'
      },
      {
        text: 'A saudade é a melodia triste que toca no coração quando a pessoa amada se vai.',
        author: 'Gustavo Ribeiro'
      },
      {
        text: 'A vida é um livro em branco, e cada dia escrevemos uma nova página.',
        author: 'Larissa Rodrigues'
      },
      {
        text: 'A natureza é a paleta de cores de Deus, e cada estação é uma nova obra-prima.',
        author: 'Matheus Almeida'
      },
      {
        text: 'O sorriso de uma criança é o tesouro mais precioso do mundo.',
        author: 'Gabriela Oliveira'
      },
      {
        text: 'A chuva é a canção da terra, regando a vida com suas gotas de esperança.',
        author: 'Rafael Ribeiro'
      },
      {
        text: 'O sol é o relógio do dia, marcando o tempo com sua luz e calor.',
        author: 'Sophia Almeida'
      },
      {
        text: 'A liberdade é o vento que acaricia a alma e nos leva para horizontes sem fim.',
        author: 'Lucas Ribeiro'
      },
      {
        text: 'A amizade é o vínculo que nos une, mesmo quando estamos separados por distância.',
        author: 'Bianca Oliveira'
      },
      {
        text: 'O amor é a luz que brilha nos olhos e aquece o coração.',
        author: 'Miguel Almeida'
      },
      {
        text: 'Na dança das estrelas, encontramos o ritmo do universo.',
        author: 'Ana Ribeiro'
      },
      {
        text: 'O poeta é um pintor de palavras, criando quadros de beleza e emoção.',
        author: 'Matheus Ribeiro'
      },
      {
        text: 'A vida é uma jornada de descobertas, e cada passo é uma aventura.',
        author: 'Luana Alves'
      },
      {
        text: 'O silêncio é a tela em branco onde a mente pinta seus pensamentos mais profundos.',
        author: 'Sofia Ribeiro'
      },
      {
        text: 'O amor é o elo que une os corações, transcendo as barreiras do tempo.',
        author: 'Lucas Costa'
      },
      {
        text: 'Nas asas da imaginação, voamos para mundos de infinitas possibilidades.',
        author: 'Pedro Oliveira'
      },
      {
        text: 'A lua é a testemunha silenciosa dos segredos da noite.',
        author: 'Isabella Alves'
      },
      {
        text: 'A melodia da chuva é a canção da terra que dança sob o céu cinzento.',
        author: 'Mariana Ribeiro'
      },
      {
        text: 'A música é a linguagem universal que une corações de todas as culturas.',
        author: 'Rafaela Oliveira'
      },
      {
        text: 'O sol se põe, mas deixa um rastro de cores no céu como despedida.',
        author: 'Henrique Almeida'
      },
      {
        text: 'A vida é como um livro, e cada dia é uma nova página em branco.',
        author: 'Vitória Alves'
      },
      {
        text: 'A arte é a expressão da alma, pintando a tela da vida com cores e emoções.',
        author: 'Mariana Costa'
      },
      {
        text: 'O amor é a poesia que flui do coração e preenche o mundo com beleza.',
        author: 'Giovanni Silva'
      },
      {
        text: 'Nas páginas da vida, escrevemos nossa história com a tinta das experiências.',
        author: 'Clara Oliveira'
      },
      {
        text: 'A solidão é a melodia da introspecção, onde encontramos nossa verdade interior.',
        author: 'Isabella Ribeiro'
      },
      {
        text: 'A esperança é a luz que brilha no fim do túnel, mesmo nas noites mais escuras.',
        author: 'Antônio Almeida'
      },
      {
        text: 'A natureza é a obra de arte mais grandiosa, e nós somos os seus admiradores.',
        author: 'Camila Oliveira'
      },
      {
        text: 'O silêncio é o eco da alma, onde os pensamentos ressoam como melodias.',
        author: 'Giovanni Ribeiro'
      },
      {
        text: 'A amizade é o tesouro que encontramos nas viagens da vida.',
        author: 'Rafaela Ribeiro'
      },
      {
        text: 'Nas entrelinhas da vida, encontramos os segredos do coração.',
        author: 'Sophia Ribeiro'
      },
      {
        text: 'A saudade é a poesia que o tempo escreve na alma.',
        author: 'Gabriel Oliveira'
      },
      {
        text: 'A vida é um livro em branco, e cada dia escrevemos uma nova página.',
        author: 'Lara Oliveira'
      },
      {
        text: 'A natureza é a paleta de cores de Deus, e cada estação é uma nova obra-prima.',
        author: 'Diego Almeida'
      },
      {
        text: 'O sorriso de uma criança é o tesouro mais precioso do mundo.',
        author: 'Laura Alves'
      },
      {
        text: 'A chuva é a canção da terra, regando a vida com suas gotas de esperança.',
        author: 'Clara Oliveira'
      },
      {
        text: 'O sol é o relógio do dia, marcando o tempo com sua luz e calor.',
        author: 'Matheus Ribeiro'
      },
      {
        text: 'A liberdade é o vento que acaricia a alma e nos leva para horizontes sem fim.',
        author: 'Isabela Almeida'
      },
      {
        text: 'A amizade é o vínculo que nos une, mesmo quando estamos separados por distância.',
        author: 'André Oliveira'
      },
      {
        text: 'O amor é a luz que brilha nos olhos e aquece o coração.',
        author: 'Julia Ribeiro'
      },
      {
        text: 'Na dança das estrelas, encontramos o ritmo do universo.',
        author: 'Lucas Almeida'
      },
      {
        text: 'O poeta é um pintor de palavras, criando quadros de beleza e emoção.',
        author: 'Rafaela Ribeiro'
      },
      {
        text: 'A vida é uma jornada de descobertas, e cada passo é uma aventura.',
        author: 'Luis Oliveira'
      },
      {
        text: 'O silêncio é a tela em branco onde a mente pinta seus pensamentos mais profundos.',
        author: 'Clara Almeida'
      },
      {
        text: 'O amor é o elo que une os corações, transcendo as barreiras do tempo.',
        author: 'Antonio Almeida'
      },
      {
        text: 'Nas asas da imaginação, voamos para mundos de infinitas possibilidades.',
        author: 'Camila Oliveira'
      },
      {
        text: 'A lua é a testemunha silenciosa dos segredos da noite.',
        author: 'Sophia Oliveira'
      },
      {
        text: 'A melodia da chuva é a canção da terra que dança sob o céu cinzento.',
        author: 'Mariana Costa'
      },
      {
        text: 'A música é a linguagem universal que une corações de todas as culturas.',
        author: 'Giovanni Silva'
      },
      {
        text: 'O sol se põe, mas deixa um rastro de cores no céu como despedida.',
        author: 'Felipe Almeida'
      },
      {
        text: 'A vida é como um livro, e cada dia é uma nova página em branco.',
        author: 'Rafaela Oliveira'
      },
      {
        text: 'A arte é a expressão da alma, pintando a tela da vida com cores e emoções.',
        author: 'Luciano Almeida'
      },
      {
        text: 'O amor é a poesia que flui do coração e preenche o mundo com beleza.',
        author: 'Bianca Ribeiro'
      },
      {
        text: 'Nas páginas da vida, escrevemos nossa história com a tinta das experiências.',
        author: 'Matheus Oliveira'
      },
      {
        text: 'A solidão é a melodia da introspecção, onde encontramos nossa verdade interior.',
        author: 'Clara Alves'
      },
      {
        text: 'A esperança é a luz que brilha no fim do túnel, mesmo nas noites mais escuras.',
        author: 'Gabriel Almeida'
      },
      {
        text: 'A natureza é a obra de arte mais grandiosa, e nós somos os seus admiradores.',
        author: 'Sofia Alves'
      },
      {
        text: 'O silêncio é o eco da alma, onde os pensamentos ressoam como melodias.',
        author: 'André Ribeiro'
      },
      {
        text: 'A amizade é o tesouro que encontramos nas viagens da vida.',
        author: 'Vitória Oliveira'
      },
      {
        text: 'Nas entrelinhas da vida, encontramos os segredos do coração.',
        author: 'Lucas Costa'
      },
      {
        text: 'A saudade é a poesia que o tempo escreve na alma.',
        author: 'Rafael Ribeiro'
      },
      {
        text: 'A vida é um livro em branco, e cada dia escrevemos uma nova página.',
        author: 'Lara Alves'
      },
      {
        text: 'A natureza é a paleta de cores de Deus, e cada estação é uma nova obra-prima.',
        author: 'Diego Almeida'
      },
      {
        text: 'O sorriso de uma criança é o tesouro mais precioso do mundo.',
        author: 'Laura Oliveira'
      },
      {
        text: 'A chuva é a canção da terra, regando a vida com suas gotas de esperança.',
        author: 'Clara Ribeiro'
      },
      {
        text: 'O sol é o relógio do dia, marcando o tempo com sua luz e calor.',
        author: 'Matheus Ribeiro'
      },
      {
        text: 'A liberdade é o vento que acaricia a alma e nos leva para horizontes sem fim.',
        author: 'Isabella Alves'
      },
      {
        text: 'A amizade é o vínculo que nos une, mesmo quando estamos separados por distância.',
        author: 'André Oliveira'
      },
      {
        text: 'O amor é a luz que brilha nos olhos e aquece o coração.',
        author: 'Julia Ribeiro'
      },
      {
        text: 'Na dança das estrelas, encontramos o ritmo do universo.',
        author: 'Lucas Almeida'
      },
      {
        text: 'O poeta é um pintor de palavras, criando quadros de beleza e emoção.',
        author: 'Rafaela Ribeiro'
      },
      {
        text: 'A vida é uma jornada de descobertas, e cada passo é uma aventura.',
        author: 'Luis Oliveira'
      },
      {
        text: 'O silêncio é a tela em branco onde a mente pinta seus pensamentos mais profundos.',
        author: 'Clara Almeida'
      },
      {
        text: 'O amor é o elo que une os corações, transcendo as barreiras do tempo.',
        author: 'Antonio Almeida'
      },
      {
        text: 'Nas asas da imaginação, voamos para mundos de infinitas possibilidades.',
        author: 'Camila Oliveira'
      },
      {
        text: 'A lua é a testemunha silenciosa dos segredos da noite.',
        author: 'Sophia Oliveira'
      },
      {
        text: 'A melodia da chuva é a canção da terra que dança sob o céu cinzento.',
        author: 'Mariana Costa'
      },
      {
        text: 'A música é a linguagem universal que une corações de todas as culturas.',
        author: 'Giovanni Silva'
      },
      {
        text: 'O sol se põe, mas deixa um rastro de cores no céu como despedida.',
        author: 'Felipe Almeida'
      },
      {
        text: 'A vida é como um livro, e cada dia é uma nova página em branco.',
        author: 'Rafaela Oliveira'
      },
      {
        text: 'A arte é a expressão da alma, pintando a tela da vida com cores e emoções.',
        author: 'Luciano Almeida'
      },
      {
        text: 'O amor é a poesia que flui do coração e preenche o mundo com beleza.',
        author: 'Bianca Ribeiro'
      },
      {
        text: 'Nas páginas da vida, escrevemos nossa história com a tinta das experiências.',
        author: 'Matheus Oliveira'
      },
      {
        text: 'A solidão é a melodia da introspecção, onde encontramos nossa verdade interior.',
        author: 'Clara Alves'
      },
      {
        text: 'A esperança é a luz que brilha no fim do túnel, mesmo nas noites mais escuras.',
        author: 'Gabriel Almeida'
      },
      {
        text: 'A natureza é a obra de arte mais grandiosa, e nós somos os seus admiradores.',
        author: 'Sofia Alves'
      },
      {
        text: 'O silêncio é o eco da alma, onde os pensamentos ressoam como melodias.',
        author: 'André Ribeiro'
      },
      {
        text: 'A amizade é o tesouro que encontramos nas viagens da vida.',
        author: 'Vitória Oliveira'
      },
      {
        text: 'Nas entrelinhas da vida, encontramos os segredos do coração.',
        author: 'Lucas Costa'
      },
      {
        text: 'A saudade é a poesia que o tempo escreve na alma.',
        author: 'Rafael Ribeiro'
      },
      {
        text: 'A vida é um livro em branco, e cada dia escrevemos uma nova página.',
        author: 'Lara Alves'
      },
      {
        text: 'A natureza é a paleta de cores de Deus, e cada estação é uma nova obra-prima.',
        author: 'Diego Almeida'
      },
      {
        text: 'O sorriso de uma criança é o tesouro mais precioso do mundo.',
        author: 'Laura Oliveira'
      },
      {
        text: 'A chuva é a canção da terra, regando a vida com suas gotas de esperança.',
        author: 'Clara Ribeiro'
      },
      {
        text: 'O sol é o relógio do dia, marcando o tempo com sua luz e calor.',
        author: 'Matheus Ribeiro'
      },
      {
        text: 'A liberdade é o vento que acaricia a alma e nos leva para horizontes sem fim.',
        author: 'Isabella Alves'
      },
      {
        text: 'A amizade é o vínculo que nos une, mesmo quando estamos separados por distância.',
        author: 'André Oliveira'
      },
      {
        text: 'O amor é a luz que brilha nos olhos e aquece o coração.',
        author: 'Julia Ribeiro'
      },
      {
        text: 'Na dança das estrelas, encontramos o ritmo do universo.',
        author: 'Lucas Almeida'
      },
      {
        text: 'O poeta é um pintor de palavras, criando quadros de beleza e emoção.',
        author: 'Rafaela Ribeiro'
      },
      {
        text: 'A vida é uma jornada de descobertas, e cada passo é uma aventura.',
        author: 'Luis Oliveira'
      },
      {
        text: 'O silêncio é a tela em branco onde a mente pinta seus pensamentos mais profundos.',
        author: 'Clara Almeida'
      },
      {
        text: 'O amor é o elo que une os corações, transcendo as barreiras do tempo.',
        author: 'Antonio Almeida'
      },
      {
        text: 'Nas asas da imaginação, voamos para mundos de infinitas possibilidades.',
        author: 'Camila Oliveira'
      },
      {
        text: 'A lua é a testemunha silenciosa dos segredos da noite.',
        author: 'Sophia Oliveira'
      },
      {
        text: 'A melodia da chuva é a canção da terra que dança sob o céu cinzento.',
        author: 'Mariana Costa'
      },
      {
        text: 'A música é a linguagem universal que une corações de todas as culturas.',
        author: 'Giovanni Silva'
      },
      {
        text: 'O sol se põe, mas deixa um rastro de cores no céu como despedida.',
        author: 'Felipe Almeida'
      },
      {
        text: 'A vida é como um livro, e cada dia é uma nova página em branco.',
        author: 'Rafaela Oliveira'
      },
      {
        text: 'A arte é a expressão da alma, pintando a tela da vida com cores e emoções.',
        author: 'Luciano Almeida'
      },
      {
        text: 'O amor é a poesia que flui do coração e preenche o mundo com beleza.',
        author: 'Bianca Ribeiro'
      },
      {
        text: 'Nas páginas da vida, escrevemos nossa história com a tinta das experiências.',
        author: 'Matheus Oliveira'
      },
      {
        text: 'A solidão é a melodia da introspecção, onde encontramos nossa verdade interior.',
        author: 'Clara Alves'
      },
      {
        text: 'A esperança é a luz que brilha no fim do túnel, mesmo nas noites mais escuras.',
        author: 'Gabriel Almeida'
      },
      {
        text: 'A natureza é a obra de arte mais grandiosa, e nós somos os seus admiradores.',
        author: 'Sofia Alves'
      },
      {
        text: 'O silêncio é o eco da alma, onde os pensamentos ressoam como melodias.',
        author: 'André Ribeiro'
      },
      {
        text: 'A amizade é o tesouro que encontramos nas viagens da vida.',
        author: 'Vitória Oliveira'
      },
      {
        text: 'Nas entrelinhas da vida, encontramos os segredos do coração.',
        author: 'Lucas Costa'
      },
      {
        text: 'A saudade é a poesia que o tempo escreve na alma.',
        author: 'Rafael Ribeiro'
      },
      {
        text: 'A vida é um livro em branco, e cada dia escrevemos uma nova página.',
        author: 'Lara Alves'
      },
      {
        text: 'A natureza é a paleta de cores de Deus, e cada estação é uma nova obra-prima.',
        author: 'Diego Almeida'
      },
      {
        text: 'O sorriso de uma criança é o tesouro mais precioso do mundo.',
        author: 'Laura Oliveira'
      },
      {
        text: 'A chuva é a canção da terra, regando a vida com suas gotas de esperança.',
        author: 'Clara Ribeiro'
      },
      {
        text: 'O sol é o relógio do dia, marcando o tempo com sua luz e calor.',
        author: 'Matheus Ribeiro'
      },
      {
        text: 'A liberdade é o vento que acaricia a alma e nos leva para horizontes sem fim.',
        author: 'Isabella Alves'
      },
      {
        text: 'A amizade é o vínculo que nos une, mesmo quando estamos separados por distância.',
        author: 'André Oliveira'
      },
      {
        text: 'O amor é a luz que brilha nos olhos e aquece o coração.',
        author: 'Julia Ribeiro'
      },
      {
        text: 'Na dança das estrelas, encontramos o ritmo do universo.',
        author: 'Lucas Almeida'
      },
      {
        text: 'O poeta é um pintor de palavras, criando quadros de beleza e emoção.',
        author: 'Rafaela Ribeiro'
      },
      {
        text: 'A vida é uma jornada de descobertas, e cada passo é uma aventura.',
        author: 'Luis Oliveira'
      },
      {
        text: 'O silêncio é a tela em branco onde a mente pinta seus pensamentos mais profundos.',
        author: 'Clara Almeida'
      },
      {
        text: 'O amor é o elo que une os corações, transcendo as barreiras do tempo.',
        author: 'Antonio Almeida'
      },
      {
        text: 'Nas asas da imaginação, voamos para mundos de infinitas possibilidades.',
        author: 'Camila Oliveira'
      },
      {
        text: 'A lua é a testemunha silenciosa dos segredos da noite.',
        author: 'Sophia Oliveira'
      },
      {
        text: 'A melodia da chuva é a canção da terra que dança sob o céu cinzento.',
        author: 'Mariana Costa'
      },
      {
        text: 'A música é a linguagem universal que une corações de todas as culturas.',
        author: 'Giovanni Silva'
      },
      {
        text: 'O sol se põe, mas deixa um rastro de cores no céu como despedida.',
        author: 'Felipe Almeida'
      },
      {
        text: 'A vida é como um livro, e cada dia é uma nova página em branco.',
        author: 'Rafaela Oliveira'
      },
      {
        text: 'A arte é a expressão da alma, pintando a tela da vida com cores e emoções.',
        author: 'Luciano Almeida'
      },
      {
        text: 'O amor é a poesia que flui do coração e preenche o mundo com beleza.',
        author: 'Bianca Ribeiro'
      },
      {
        text: 'Nas páginas da vida, escrevemos nossa história com a tinta das experiências.',
        author: 'Matheus Oliveira'
      },
      {
        text: 'A solidão é a melodia da introspecção, onde encontramos nossa verdade interior.',
        author: 'Clara Alves'
      },
      {
        text: 'A esperança é a luz que brilha no fim do túnel, mesmo nas noites mais escuras.',
        author: 'Gabriel Almeida'
      },
      {
        text: 'A natureza é a obra de arte mais grandiosa, e nós somos os seus admiradores.',
        author: 'Sofia Alves'
      },
      {
        text: 'O silêncio é o eco da alma, onde os pensamentos ressoam como melodias.',
        author: 'André Ribeiro'
      },
      {
        text: 'A amizade é o tesouro que encontramos nas viagens da vida.',
        author: 'Vitória Oliveira'
      },
      {
        text: 'Nas entrelinhas da vida, encontramos os segredos do coração.',
        author: 'Lucas Costa'
      },
      {
        text: 'A saudade é a poesia que o tempo escreve na alma.',
        author: 'Rafael Ribeiro'
      },
      {
        text: 'A vida é um livro em branco, e cada dia escrevemos uma nova página.',
        author: 'Lara Alves'
      },
      {
        text: 'A natureza é a paleta de cores de Deus, e cada estação é uma nova obra-prima.',
        author: 'Diego Almeida'
      },
      {
        text: 'O sorriso de uma criança é o tesouro mais precioso do mundo.',
        author: 'Laura Oliveira'
      },
      {
        text: 'A chuva é a canção da terra, regando a vida com suas gotas de esperança.',
        author: 'Clara Ribeiro'
      },
      {
        text: 'O sol é o relógio do dia, marcando o tempo com sua luz e calor.',
        author: 'Matheus Ribeiro'
      },
      {
        text: 'A liberdade é o vento que acaricia a alma e nos leva para horizontes sem fim.',
        author: 'Isabella Alves'
      },
      {
        text: 'A amizade é o vínculo que nos une, mesmo quando estamos separados por distância.',
        author: 'André Oliveira'
      },
      {
        text: 'O amor é a luz que brilha nos olhos e aquece o coração.',
        author: 'Julia Ribeiro'
      },
      {
        text: 'Na dança das estrelas, encontramos o ritmo do universo.',
        author: 'Lucas Almeida'
      },
      {
        text: 'O poeta é um pintor de palavras, criando quadros de beleza e emoção.',
        author: 'Rafaela Ribeiro'
      },
      {
        text: 'A vida é uma jornada de descobertas, e cada passo é uma aventura.',
        author: 'Luis Oliveira'
      },
      {
        text: 'O silêncio é a tela em branco onde a mente pinta seus pensamentos mais profundos.',
        author: 'Clara Almeida'
      },
      {
        text: 'O amor é o elo que une os corações, transcendo as barreiras do tempo.',
        author: 'Antonio Almeida'
      },
      {
        text: 'Nas asas da imaginação, voamos para mundos de infinitas possibilidades.',
        author: 'Camila Oliveira'
      },
      {
        text: 'A lua é a testemunha silenciosa dos segredos da noite.',
        author: 'Sophia Oliveira'
      },
      {
        text: 'A melodia da chuva é a canção da terra que dança sob o céu cinzento.',
        author: 'Mariana Costa'
      },
      {
        text: 'A música é a linguagem universal que une corações de todas as culturas.',
        author: 'Giovanni Silva'
      },
      {
        text: 'O sol se põe, mas deixa um rastro de cores no céu como despedida.',
        author: 'Felipe Almeida'
      },
      {
        text: 'A vida é como um livro, e cada dia é uma nova página em branco.',
        author: 'Rafaela Oliveira'
      },
      {
        text: 'A arte é a expressão da alma, pintando a tela da vida com cores e emoções.',
        author: 'Luciano Almeida'
      },
      {
        text: 'O amor é a poesia que flui do coração e preenche o mundo com beleza.',
        author: 'Bianca Ribeiro'
      },
      {
        text: 'Nas páginas da vida, escrevemos nossa história com a tinta das experiências.',
        author: 'Matheus Oliveira'
      },
      {
        text: 'A solidão é a melodia da introspecção, onde encontramos nossa verdade interior.',
        author: 'Clara Alves'
      },
      {
        text: 'A esperança é a luz que brilha no fim do túnel, mesmo nas noites mais escuras.',
        author: 'Gabriel Almeida'
      },
      {
        text: 'A natureza é a obra de arte mais grandiosa, e nós somos os seus admiradores.',
        author: 'Sofia Alves'
      },
      {
        text: 'O silêncio é o eco da alma, onde os pensamentos ressoam como melodias.',
        author: 'André Ribeiro'
      },
      {
        text: 'A amizade é o tesouro que encontramos nas viagens da vida.',
        author: 'Vitória Oliveira'
      },
      {
        text: 'Nas entrelinhas da vida, encontramos os segredos do coração.',
        author: 'Lucas Costa'
      },
      {
        text: 'A saudade é a poesia que o tempo escreve na alma.',
        author: 'Rafael Ribeiro'
      },
      {
        text: 'A vida é um livro em branco, e cada dia escrevemos uma nova página.',
        author: 'Lara Alves'
      },
      {
        text: 'A natureza é a paleta de cores de Deus, e cada estação é uma nova obra-prima.',
        author: 'Diego Almeida'
      },
      {
        text: 'O sorriso de uma criança é o tesouro mais precioso do mundo.',
        author: 'Laura Oliveira'
      },
      {
        text: 'A chuva é a canção da terra, regando a vida com suas gotas de esperança.',
        author: 'Clara Ribeiro'
      },
      {
        text: 'O sol é o relógio do dia, marcando o tempo com sua luz e calor.',
        author: 'Matheus Ribeiro'
      },
      {
        text: 'A liberdade é o vento que acaricia a alma e nos leva para horizontes sem fim.',
        author: 'Isabella Alves'
      },
      {
        text: 'A amizade é o vínculo que nos une, mesmo quando estamos separados por distância.',
        author: 'André Oliveira'
      },
      {
        text: 'O amor é a luz que brilha nos olhos e aquece o coração.',
        author: 'Julia Ribeiro'
      },
      {
        text: 'Na dança das estrelas, encontramos o ritmo do universo.',
        author: 'Lucas Almeida'
      },
      {
        text: 'O poeta é um pintor de palavras, criando quadros de beleza e emoção.',
        author: 'Rafaela Ribeiro'
      },
      {
        text: 'A vida é uma jornada de descobertas, e cada passo é uma aventura.',
        author: 'Luis Oliveira'
      },
      {
        text: 'O silêncio é a tela em branco onde a mente pinta seus pensamentos mais profundos.',
        author: 'Clara Almeida'
      },
      {
        text: 'O amor é o elo que une os corações, transcendo as barreiras do tempo.',
        author: 'Antonio Almeida'
      },
      {
        text: 'Nas asas da imaginação, voamos para mundos de infinitas possibilidades.',
        author: 'Camila Oliveira'
      },
      {
        text: 'A lua é a testemunha silenciosa dos segredos da noite.',
        author: 'Sophia Oliveira'
      },
      {
        text: 'A melodia da chuva é a canção da terra que dança sob o céu cinzento.',
        author: 'Mariana Costa'
      },
      {
        text: 'A música é a linguagem universal que une corações de todas as culturas.',
        author: 'Giovanni Silva'
      },
      {
        text: 'O sol se põe, mas deixa um rastro de cores no céu como despedida.',
        author: 'Felipe Almeida'
      },
      {
        text: 'A vida é como um livro, e cada dia é uma nova página em branco.',
        author: 'Rafaela Oliveira'
      },
      {
        text: 'A arte é a expressão da alma, pintando a tela da vida com cores e emoções.',
        author: 'Luciano Almeida'
      },
      {
        text: 'O amor é a poesia que flui do coração e preenche o mundo com beleza.',
        author: 'Bianca Ribeiro'
      },
      {
        text: 'Nas páginas da vida, escrevemos nossa história com a tinta das experiências.',
        author: 'Matheus Oliveira'
      },
      {
        text: 'A solidão é a melodia da introspecção, onde encontramos nossa verdade interior.',
        author: 'Clara Alves'
      },
      {
        text: 'A esperança é a luz que brilha no fim do túnel, mesmo nas noites mais escuras.',
        author: 'Gabriel Almeida'
      },
      {
        text: 'A natureza é a obra de arte mais grandiosa, e nós somos os seus admiradores.',
        author: 'Sofia Alves'
      },
      {
        text: 'O silêncio é o eco da alma, onde os pensamentos ressoam como melodias.',
        author: 'André Ribeiro'
      },
      {
        text: 'A amizade é o tesouro que encontramos nas viagens da vida.',
        author: 'Vitória Oliveira'
      },
      {
        text: 'Nas entrelinhas da vida, encontramos os segredos do coração.',
        author: 'Lucas Costa'
      },
      {
        text: 'A saudade é a poesia que o tempo escreve na alma.',
        author: 'Rafael Ribeiro'
      },
      {
        text: 'A vida é um livro em branco, e cada dia escrevemos uma nova página.',
        author: 'Lara Alves'
      },
      {
        text: 'A natureza é a paleta de cores de Deus, e cada estação é uma nova obra-prima.',
        author: 'Diego Almeida'
      },
      {
        text: 'O sorriso de uma criança é o tesouro mais precioso do mundo.',
        author: 'Laura Oliveira'
      },
      {
        text: 'A chuva é a canção da terra, regando a vida com suas gotas de esperança.',
        author: 'Clara Ribeiro'
      },
      {
        text: 'O sol é o relógio do dia, marcando o tempo com sua luz e calor.',
        author: 'Matheus Ribeiro'
      },
      {
        text: 'A liberdade é o vento que acaricia a alma e nos leva para horizontes sem fim.',
        author: 'Isabella Alves'
      },
      {
        text: 'A amizade é o vínculo que nos une, mesmo quando estamos separados por distância.',
        author: 'André Oliveira'
      },
      {
        text: 'O amor é a luz que brilha nos olhos e aquece o coração.',
        author: 'Julia Ribeiro'
      },
      {
        text: 'Na dança das estrelas, encontramos o ritmo do universo.',
        author: 'Lucas Almeida'
      },
      {
        text: 'O poeta é um pintor de palavras, criando quadros de beleza e emoção.',
        author: 'Rafaela Ribeiro'
      },
      {
        text: 'A vida é uma jornada de descobertas, e cada passo é uma aventura.',
        author: 'Luis Oliveira'
      },
      {
        text: 'O silêncio é a tela em branco onde a mente pinta seus pensamentos mais profundos.',
        author: 'Clara Almeida'
      },
      {
        text: 'O amor é o elo que une os corações, transcendo as barreiras do tempo.',
        author: 'Antonio Almeida'
      },
      {
        text: 'Nas asas da imaginação, voamos para mundos de infinitas possibilidades.',
        author: 'Camila Oliveira'
      },
      {
        text: 'A lua é a testemunha silenciosa dos segredos da noite.',
        author: 'Sophia Oliveira'
      },
      {
        text: 'A melodia da chuva é a canção da terra, regando a vida com suas gotas de esperança.',
        author: 'Mariana Costa'
      },
      {
        text: 'A música é a linguagem universal que une corações de todas as culturas.',
        author: 'Giovanni Silva'
      },
      {
        text: 'O sol se põe, mas deixa um rastro de cores no céu como despedida.',
        author: 'Felipe Almeida'
      },
      {
        text: 'A vida é como um livro, e cada dia é uma nova página em branco.',
        author: 'Rafaela Oliveira'
      },
      {
        text: 'A arte é a expressão da alma, pintando a tela da vida com cores e emoções.',
        author: 'Luciano Almeida'
      },
      {
        text: 'O amor é a poesia que flui do coração e preenche o mundo com beleza.',
        author: 'Bianca Ribeiro'
      },
      {
        text: 'Nas páginas da vida, escrevemos nossa história com a tinta das experiências.',
        author: 'Matheus Oliveira'
      },
      {
        text: 'A solidão é a melodia da introspecção, onde encontramos nossa verdade interior.',
        author: 'Clara Alves'
      },
      {
        text: 'A esperança é a luz que brilha no fim do túnel, mesmo nas noites mais escuras.',
        author: 'Gabriel Almeida'
      },
      {
        text: 'A natureza é a obra de arte mais grandiosa, e nós somos os seus admiradores.',
        author: 'Sofia Alves'
      },
      {
        text: 'O silêncio é o eco da alma, onde os pensamentos ressoam como melodias.',
        author: 'André Ribeiro'
      },
      {
        text: 'A amizade é o tesouro que encontramos nas viagens da vida.',
        author: 'Vitória Oliveira'
      },
      {
        text: 'Nas entrelinhas da vida, encontramos os segredos do coração.',
        author: 'Lucas Costa'
      },
      {
        text: 'A saudade é a poesia que o tempo escreve na alma.',
        author: 'Rafael Ribeiro'
      },
      {
        text: 'A vida é um livro em branco, e cada dia escrevemos uma nova página.',
        author: 'Lara Alves'
      },
      {
        text: 'A natureza é a paleta de cores de Deus, e cada estação é uma nova obra-prima.',
        author: 'Diego Almeida'
      },
      {
        text: 'O sorriso de uma criança é o tesouro mais precioso do mundo.',
        author: 'Laura Oliveira'
      },
  ];

  const [currentQuote, setCurrentQuote] = useState(getRandomQuote());

  // Função para obter uma citação aleatória
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  // Função para atualizar a citação exibida
  function generateNewQuote() {
    setCurrentQuote(getRandomQuote());
  }

  return (
    <div className="poet-quote-generator">
      <h2>Citação do Dia</h2>
      <blockquote>
        <p>"{currentQuote.text}"</p>
        <footer>- {currentQuote.author}</footer>
      </blockquote>
      <button onClick={generateNewQuote}>Nova Citação</button>
    </div>
  );
};

export default PoetQuoteGenerator;
