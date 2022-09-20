import {NextApiHandler, NextApiRequest, NextApiResponse} from 'next';

type Data = {
    success: boolean
    message: string
}

const handler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
    return res.status(200).json({success: true, message: 'monorepo-test'});
}

export default handler;
