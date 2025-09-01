export async function generateLuckyNumbers() {
  try {
    const res = await fetch("http://localhost:4001/api/lucky-numbers");
    if (!res.ok) throw new Error("Error generating lucky numbers");
    const data = await res.json();
    return data.numbers;
  } catch (error) {
    console.error(error);
    return [];
  }
}
