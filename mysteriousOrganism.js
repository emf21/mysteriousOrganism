// This project seeks to create objects that simulate the DNA of an organism
// it seeks to mutate, compare and check the survival rate of the organism
// beneath the sea as it is expensive moving them from their current state

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};
// console.log(dnaBases[i])

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
// console.log(newStrand[i]);

// Creating factory function of objects

const pAequorFactor = (number, dna) => {
  return {
    number: number,
    dna: dna,
    mutate() {
      let randomBase = returnRandBase();
      let randomIndex = Math.floor(Math.random() * dna.length);
      while (this.dna[randomIndex] !== randomBase) {
        this.dna[Math.floor(Math.random() * dna.length)] = returnRandBase();
        return this.dna;
      }
    },

    // Comparing Dna

    compareDna(anotherpAequor) {
      let count = 0;
      for (let i = 0; i <= dna.length - 1; i++) {
        if (this.dna[i] === anotherpAequor.dna[i]) {
          count = count + 1;
        }
      }
      let percentage = Math.floor((count / 15) * 100);
      console.log(
        `Specimen #${this.Number} and specimen #${anotherpAequor.number} have ${percentage}% DNA in common.`
      );
    },

    // Checking the percentage rate of survival
    willLikelySurvive() {
      let CorG = 0;
      for (let i = 0; i <= dna.length - 1; i++) {
        if (this.dna[i] === "C" || this.dna[i] === "G") {
          CorG = CorG + 1;
        }
      }
      let percentageSurvival = (CorG / 15) * 100;
      if (percentageSurvival >= 60) {
        return true;
      } else {
        return false;
      }
    },
  };
};

// Looping through the survival of 30 organisms
const survivors = [];
let i = 1;
while (survivors.length < 30) {
  const testing1 = pAequorFactor(i, mockUpStrand());
  const trueTest = testing1.willLikelySurvive();
  if (trueTest === true) {
    survivors.push(testing1);
    i = i + 1;
  }
}

console.log(survivors);
console.log(survivors.length);
