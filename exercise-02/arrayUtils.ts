// Interface genérica para objetos indexáveis por string
interface IndexableObject {
    [key: string]: any;
  }
  
  // Função que retorna um array com elementos únicos
  export const unique = <T>(arr: T[]): T[] => [...new Set(arr)];
  
  // Função que agrupa um array de objetos por uma chave específica
  export const groupBy = <T extends IndexableObject>(arr: T[], key: keyof T): Record<string, T[]> =>
    arr.reduce((acc: Record<string, T[]>, obj: T) => {
      const groupKey = String(obj[key]);
      (acc[groupKey] = acc[groupKey] || []).push(obj);
      return acc;
    }, {});
  
  // Função que soma os valores de uma propriedade específica de um array de objetos
  export const sumBy = <T extends IndexableObject>(arr: T[], key: keyof T): number =>
    arr.reduce((total: number, obj: T) => total + (Number(obj[key]) || 0), 0);