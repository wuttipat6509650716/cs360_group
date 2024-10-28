const isOwner = require('../../src/api/profile/middlewares/isOwner')

describe('Custom Middleware Unit Test',()=>{
    let ctx;
    let next;
    let mockStrapi;

    beforeEach(() => {
        ctx = {
          state: { user: { id: 1 } },
          params: { id: '1' },
          unauthorized: jest.fn(),
          badRequest: jest.fn(),
          notFound: jest.fn(),
          internalServerError: jest.fn()
        };
        
        next = jest.fn();
    
        mockStrapi = {
          entityService: {
            findOne: jest.fn().mockResolvedValue({
              id: 1,
              user: { id: 1 },
            }),
          },
          log:{
            error:jest.fn()
          }
        };
      });
      
})