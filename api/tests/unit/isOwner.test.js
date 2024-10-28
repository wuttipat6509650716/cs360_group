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
      
      //TC 1 
      it('should return unauthorized if user is not authenticated', async () => {
        ctx.state.user = null
        const middleware = isOwner({}, { strapi: mockStrapi });

        await middleware(ctx, next);

        expect(ctx.unauthorized).toHaveBeenCalledWith("User authentication is required.");
        expect(next).not.toHaveBeenCalled();
      });

})