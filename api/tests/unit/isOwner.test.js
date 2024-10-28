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

    //TC2
    it('should return bad request if ID is missing', async () => {
        ctx.params.id = undefined
        const middleware = isOwner({}, { strapi: mockStrapi });

        await middleware(ctx, next);

        expect(ctx.badRequest).toHaveBeenCalledWith("Profild ID is required.");
        expect(next).not.toHaveBeenCalled();
    });

    //TC3
    it('should verify isOwner middleware for invalid ID', async () => {
        ctx.params.id = 'abc'
        const middleware = isOwner({}, { strapi: mockStrapi });

        await middleware(ctx, next);

        expect(ctx.badRequest).toHaveBeenCalledWith("ID must be digit only");
        expect(next).not.toHaveBeenCalled();
    });
    
       //TC4
       it('should verify isOwner middleware for non-existent profile', async () => {
        mockStrapi.entityService.findOne = jest.fn().mockResolvedValue(null)

        const middleware = isOwner({}, { strapi: mockStrapi });

        await middleware(ctx, next);

        expect(ctx.notFound).toHaveBeenCalledWith("Profile not found.");
        expect(next).not.toHaveBeenCalled();
      });

      //TC6
      it('should verify isOwner middleware for authorized user', async () => {
        ctx.state.user.id = 1
        mockStrapi.entityService.findOne = jest.fn().mockResolvedValue({
          id: 1,
          user: { id: 1 },
        })

        const middleware = isOwner({}, { strapi: mockStrapi });

        await middleware(ctx, next);

        expect(next).toHaveBeenCalled();
      });

})