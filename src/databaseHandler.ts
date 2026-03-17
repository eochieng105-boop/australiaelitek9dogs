type OrderRow = {
    Id: string;
    CustomerName: string;
    OrderDate: number;
};

type Env = {
    MY_DB: {
        prepare: (query: string) => {
            run: <T>() => Promise<T>;
        };
    };
};

export default {
    async fetch(_: Request, env: Env) {
        const result = await env.MY_DB.prepare(
            "SELECT Id, CustomerName, OrderDate FROM [Order] ORDER BY ShippedDate DESC LIMIT 100"
        ).run<OrderRow>();
        return new Response(JSON.stringify(result));
    },
};