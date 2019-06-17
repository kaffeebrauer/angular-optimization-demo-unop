export interface EmployeeData {
  label: string;
  num: number;
}

export class ListGenerator {
  generate(firstNames: string[], surnameNames: string[], numRange: [number, number], width: number): EmployeeData[] {
    const result: EmployeeData[] = [];
    for (let i = 0; i < width; i += 1) {
      result.push(this.generateNode(firstNames, surnameNames, numRange));
    }
    return result;
  }

  generateNumber(numRange: [number, number]) {
    const diff = numRange[1] - numRange[0];
    return numRange[0] + Math.floor(Math.random() * diff);
  }

  generateNames(firstNames: string[], surnameNames: string[]) {
    return firstNames[Math.floor(Math.random() * firstNames.length)] + ' ' + surnameNames[Math.floor(Math.random() * surnameNames.length)];
  }

  private generateNode(firstNames: string[], surnameNames: string[], numRange: [number, number]): EmployeeData {
    return {
      label: this.generateNames(firstNames, surnameNames),
      num: this.generateNumber(numRange)
    };
  }
}
