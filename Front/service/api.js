// ici on fait le lien entre le backend et le frontend

// on cree des variable dans lesquelle on stock les donner du back

const getAllsport = async () => {
    const url = "../../backend/Api/match.json";

    const requestInfos = new Request(url, {
        method: 'get',
    });
// Executer la requete:
    const request = await fetch(requestInfos);

// recuperer la reponse
    const response = await request.json();
    console.log('response', response )

// return la response

    return response;
}

export { getAllsport };