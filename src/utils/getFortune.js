export async function getFortune() {
  try {
    const res = await fetch("http://localhost:4001/api/fortune");
    if (!res.ok) throw new Error("Error generating your fortune");
    const data = await res.json();
    return data.fortune;
  } catch (error) {
    console.error(error);
    return "Sorry, Something wrong!";
  }
}
